window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });
