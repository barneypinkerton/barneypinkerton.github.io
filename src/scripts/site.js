// Inline PDF reader: creates the iframe only on first open
document.querySelectorAll('.read-btn').forEach(function (btn, i) {
  var openLabel = btn.innerHTML;
  var frame = btn.closest('.card').querySelector('.reader-frame');
  if (!frame) return;
  if (!frame.id) frame.id = 'reader-' + i;
  btn.setAttribute('aria-controls', frame.id);
  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', function () {
    var open = frame.children.length > 0;
    if (open) {
      frame.innerHTML = '';
      btn.innerHTML = openLabel;
    } else {
      var iframe = document.createElement('iframe');
      iframe.src = btn.dataset.src + '#toolbar=0&navpanes=0';
      var heading = btn.closest('.card').querySelector('h2');
      iframe.title = heading ? heading.textContent : 'Document';
      frame.appendChild(iframe);
      btn.innerHTML = '▼&nbsp; Close reader';
    }
    btn.setAttribute('aria-expanded', String(!open));
  });
});

// Scroll reveal. Cards are only hidden when <html> has the `js` class,
// so content stays visible if this script never runs.
var revealCards = document.querySelectorAll('.reveal');
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealCards.forEach(function (el) { el.classList.add('visible'); });
} else {
  revealCards.forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.08) + 's';
  });
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealCards.forEach(function (el) { revealObserver.observe(el); });
}
