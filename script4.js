document.addEventListener('DOMContentLoaded', function () {
  const magicButton = document.getElementById('magic-button');
  const magicButton2 = document.getElementById('magic-button2');
  const clickSound = document.getElementById('click-sound');
  const hoverSound = document.getElementById('hover-sound');
  const fadeOverlay = document.getElementById('fade-overlay');

  if (magicButton && clickSound && hoverSound && fadeOverlay) {
    magicButton.addEventListener('click', function (event) {
      // Play click sound
      clickSound.play();

      // Make the button brighter on click
      event.target.style.filter = 'brightness(1.5)';

      // Show the white fade-out overlay
      fadeOverlay.style.opacity = 1; // Start fade-out effect

      // Wait for fade-out animation to complete before redirect
      setTimeout(function () {
        window.location.href = "nerves.html"; // Change this to your desired URL
      }, 1000); // Wait for 1 second to let the fade complete
    });

    magicButton.addEventListener('mouseover', function (event) {
      // Play hover sound
      hoverSound.play();

      // Make the button brighter on hover
      event.target.style.filter = 'brightness(1.2)';
    });

    magicButton.addEventListener('mouseleave', function (event) {
      // Reset the brightness when mouse leaves the button
      event.target.style.filter = 'brightness(1)';
    });
  }

  if (magicButton2 && clickSound && hoverSound && fadeOverlay) {
    magicButton2.addEventListener('click', function (event) {
      // Play click sound
      clickSound.play();

      // Make the button brighter on click
      event.target.style.filter = 'brightness(1.5)';

      // Show the white fade-out overlay
      fadeOverlay.style.opacity = 1; // Start fade-out effect

      // Wait for fade-out animation to complete before redirect
      setTimeout(function () {
        window.location.href = "iris.html"; // Change this to your desired URL
      }, 1000); // Wait for 1 second to let the fade complete
    });

    magicButton2.addEventListener('mouseover', function (event) {
      // Play hover sound
      hoverSound.play();

      // Make the button brighter on hover
      event.target.style.filter = 'brightness(1.2)';
    });

    magicButton2.addEventListener('mouseleave', function (event) {
      // Reset the brightness when mouse leaves the button
      event.target.style.filter = 'brightness(1)';
    });
  }
});