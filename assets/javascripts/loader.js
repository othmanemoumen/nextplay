/* JavaScript to hide preloader after page loads */

document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('js-preloader');
  setTimeout(function() {
    preloader.classList.add('loaded');
    
    // Optional: remove from DOM after animation completes
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

