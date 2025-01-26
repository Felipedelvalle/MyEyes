function addButtonListeners(buttonId, redirectUrl) {
    const button = document.getElementById(buttonId);
    
    button.addEventListener('click', function (event) {
        // Play click sound
        document.getElementById('click-sound').play();
      
        // Make the button brighter on click
        event.target.style.filter = 'brightness(1.5)';
      
        // Show the white fade-out overlay
        const fadeOverlay = document.getElementById('fade-overlay');
        fadeOverlay.style.opacity = 1; // Start fade-out effect
      
        // Wait for fade-out animation to complete before redirect
        setTimeout(function () {
          window.location.href = redirectUrl; // Change this to your desired URL
        }, 1000); // Wait for 1 second to let the fade complete
    });
    
    button.addEventListener('mouseover', function (event) {
        // Play hover sound
        document.getElementById('hover-sound').play();
      
        // Make the button brighter on hover
        event.target.style.filter = 'brightness(1.2)';
    });
    
    button.addEventListener('mouseleave', function (event) {
        // Reset the brightness when mouse leaves the button
        event.target.style.filter = 'brightness(1)';
    });
}

addButtonListeners('magic-button', 'muscles.html');
addButtonListeners('magic-button2', 'lens.html');