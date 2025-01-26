function handleButtonClick(event, url) {
    // Play click sound
    document.getElementById('click-sound').play();
  
    // Make the button brighter on click
    event.target.style.filter = 'brightness(1.5)';
  
    // Show the white fade-out overlay
    const fadeOverlay = document.getElementById('fade-overlay');
    fadeOverlay.style.opacity = 1; // Start fade-out effect
  
    // Wait for fade-out animation to complete before redirect
    setTimeout(function () {
      window.location.href = url; // Change this to your desired URL
    }, 1000); // Wait for 1 second to let the fade complete
  }
  
  function handleButtonHover(event) {
    // Play hover sound
    document.getElementById('hover-sound').play();
  
    // Make the button brighter on hover
    event.target.style.filter = 'brightness(1.2)';
  }
  
  function handleButtonLeave(event) {
    // Reset the brightness when mouse leaves the button
    event.target.style.filter = 'brightness(1)';
  }
  
  const buttons = [
    { id: 'magic-button', url: 'end.html' },
    { id: 'magic-button2', url: 'muscles.html' }
  ];
  
  buttons.forEach(button => {
    const element = document.getElementById(button.id);
    element.addEventListener('click', function (event) {
      handleButtonClick(event, button.url);
    });
    element.addEventListener('mouseover', handleButtonHover);
    element.addEventListener('mouseleave', handleButtonLeave);
  });