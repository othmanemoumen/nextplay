
 document.addEventListener('DOMContentLoaded', function() {
    // Initialize the loader
    const loader = new LottieLoader({
      onComplete: () => console.log('Animation loaded successfully')
    });
    
    // Load your animation
    loader.loadAnimation(
      '/assets/animations/lottie.json', // Path to your animation file
      '#lottie-animation', // Container selector
      {
        autoplay: true,
        loop: true,
        renderer: 'svg'
      }
    );
  });
