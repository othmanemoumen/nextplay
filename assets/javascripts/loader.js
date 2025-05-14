window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  loader.classList.add("loader--hidden");

  // Fallback: remove after transition even if event doesn't fire
  const removeLoader = () => {
    if (loader && loader.parentNode) {
      loader.remove();
    }
  };

  loader.addEventListener("transitionend", removeLoader);

  // Fallback: remove after 1s just in case
  setTimeout(removeLoader, 1000);
});
