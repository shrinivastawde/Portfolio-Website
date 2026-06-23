(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var revealTargets = document.querySelectorAll(".project-card, .edu-grid, .spec-table");
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach(function (el) {
    observer.observe(el);
  });
})();
