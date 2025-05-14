<script>
  window.addEventListener('load', function () {
    const preloader = document.getElementById('js-preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300); // match the CSS transition duration
    }
  });
</script>
