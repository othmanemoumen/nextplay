 // Function to simulate website loading
    function simulateLoading() {
      const preloader = document.getElementById('preloader');
      const content = document.querySelector('.content');
      
      // Simulate loading time (you can replace this with your actual loading logic)
      const loadingTime = 3000; // 3 seconds
      
      // Hide preloader and show content after loading time
      setTimeout(() => {
        // Fade out preloader
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        
        // Fade in content
        content.style.opacity = '1';
        
        // Remove preloader from DOM after animation completes
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, loadingTime);
    }
    
    // Add event listener for when the page has loaded
    window.addEventListener('load', simulateLoading);
    
    // For demonstration purposes, if load event already fired
    if (document.readyState === 'complete') {
      simulateLoading();
    }
