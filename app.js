const eyes = document.querySelectorAll('.eye'); // Select both eyes

// Function to move the pupil
function movePupils(event) {
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect(); // Get eye's position and size
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const mouseX = event.clientX; // Cursor X position
        const mouseY = event.clientY; // Cursor Y position

        // Calculate the angle between cursor and eye center
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

        // Limit the distance the pupil can move (relative to eye size)
        const maxDistance = (eyeRect.width / 2) - (pupil.offsetWidth / 2);
        const pupilX = Math.cos(angle) * maxDistance;
        const pupilY = Math.sin(angle) * maxDistance;

        // Move the pupil
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
}

// Event listener for mouse movement
document.addEventListener('mousemove', movePupils);
