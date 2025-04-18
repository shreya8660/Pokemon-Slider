document.addEventListener('DOMContentLoaded', function() {
    const ACTIVECLASS = 'active';
    const IMAGES = document.querySelectorAll('.flex-card-container');
    
    // Make sure we have elements before proceeding
    if (IMAGES.length === 0) {
      console.error('No slider elements found');
      return;
    }
    
    // Set initial active state if not already set
    let hasActive = false;
    IMAGES.forEach(image => {
      if (image.classList.contains(ACTIVECLASS)) {
        hasActive = true;
      }
    });
    
    if (!hasActive) {
      IMAGES[0].classList.add(ACTIVECLASS);
    }
    
    function removeActiveClass() {
      const elm = document.querySelector(`.${ACTIVECLASS}`);
      if (elm) {
        elm.classList.remove(ACTIVECLASS);
      }
    }
    
    function addClass(event) {
      event.stopPropagation();
      removeActiveClass();
      const target = event.currentTarget;
      target.classList.add(ACTIVECLASS);
    }
    
    // Add click event listeners to all images
    IMAGES.forEach(image => {
      image.addEventListener('click', addClass);
    });
    
    // Optional: Auto-slide functionality
    
    let currentIndex = 0;
    
    function autoSlide() {
      removeActiveClass();
      currentIndex = (currentIndex + 1) % IMAGES.length;
      IMAGES[currentIndex].classList.add(ACTIVECLASS);
    }
    
    // Uncomment to enable auto-sliding
     const slideInterval = setInterval(autoSlide, 2000);
    
    
    // Debugging
    console.log('Pokémon slider initialized with', IMAGES.length, 'images');
  });