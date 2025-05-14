window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Optional: keep the loader visible for a short time to avoid flashing
  setTimeout(() => {
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      loader.remove(); // Or: document.body.removeChild(loader);
    });
  }, 500); // 500ms delay before fading out
});
