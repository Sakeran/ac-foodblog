// Add .lazybg class to any recipe summaries.
// Ensures the background image, if any, is lazy-loaded.
(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      for (let e of entries) {
        if (e.isIntersecting) {
          const target = e.target;

          target.classList.remove("lazybg");
          observer.unobserve(target);
        }
      }
    },
    {
      rootMargin: "-20%",
    }
  );

  const summaries = document.querySelectorAll(
    ".recipe-summary, .newsletter-signup-form, .store-locator"
  );
  summaries.forEach((s) => {
    s.classList.add("lazybg");
    observer.observe(s);
  });
})();
