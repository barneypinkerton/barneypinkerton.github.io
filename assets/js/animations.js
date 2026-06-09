document.addEventListener('DOMContentLoaded', function () {

  // ── Scroll reveal ──────────────────────────────────────────────
  var cards = document.querySelectorAll('.project-card, .writing-card');
  cards.forEach(function (card, i) {
    card.classList.add('scroll-reveal');
    card.style.transitionDelay = (i * 0.08) + 's';
  });

  var observer = new IntersectionObserver(function (entries) {
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

  // ── Lazy PDF reader ───────────────────────────────────────────
  // Iframes are created on click so they never load in the background,
  // which prevents Chrome from showing a download prompt on page load.
  document.querySelectorAll('.read-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var frame = btn.nextElementSibling;
      if (frame.children.length === 0) {
        var iframe = document.createElement('iframe');
        iframe.src = btn.dataset.src + '#toolbar=0&navpanes=0';
        frame.appendChild(iframe);
        btn.textContent = '▼  Close reader';
      } else {
        frame.innerHTML = '';
        btn.textContent = '▶  Read inline';
      }
    });
  });

});
