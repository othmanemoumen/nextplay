
// js/lottie-loader.js
document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/animation.json'
  });
});
