document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('nav .left img.logo');

    let doorOpen = false;
    logo.addEventListener('click', () => {
        doorOpen = !doorOpen;
        if (doorOpen) {
            logo.src = 'navButtons/freeRoomsLogoOpen.png';
        } else {
            logo.src = 'navButtons/freeRoomsLogoClosed.png';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buildingHeaders = document.querySelectorAll('.building h2');
  
    buildingHeaders.forEach((header) => {
      header.dataset.originalText = header.textContent.trim();
    });
  
    // convert "9 rooms available" to "9/9"
    function updateRoomText() {
      buildingHeaders.forEach((header) => {
        const original = header.dataset.originalText;
        // Look for a pattern like "9 rooms available"
        const match = original.match(/^(\d+)\s+rooms\s+available$/i);
        if (match) {
          const number = match[1];
          header.textContent = `${number}/${number}`;
        }
      });
    }
  
    function revertRoomText() {
      buildingHeaders.forEach((header) => {
        header.textContent = header.dataset.originalText;
      });
    }
  
    // Set up a media query for max-width: 576px
    const mediaQuery = window.matchMedia('(max-width: 576px)');
  
    // Handler to run whenever the media query state changes
    function handleMediaQuery(size) {
      if (size.matches) {
        updateRoomText();
      } else {
        revertRoomText();
      }
    }
  
    // Listen for changes in screen size
    mediaQuery.addEventListener('change', handleMediaQuery);
  
    // Run it once on page load
    handleMediaQuery(mediaQuery);
  });
  