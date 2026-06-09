document.addEventListener('DOMContentLoaded', function () {

  // Auto-apply scroll reveal to cards
  const cards = document.querySelectorAll('.project-card, .writing-card');
  cards.forEach(function (card, i) {
    card.classList.add('scroll-reveal');
    card.style.transitionDelay = (i * 0.08) + 's';
  });

  // Intersection Observer — trigger once as each card scrolls into view
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(function (el) {
    observer.observe(el);
  });

});
