// Lazy iframe loader — creates the iframe only on first click
document.querySelectorAll('.read-btn').forEach(function (btn) {
  var openLabel = btn.textContent;
  btn.addEventListener('click', function () {
    var frame = btn.closest('.card').querySelector('.reader-frame');
    if (frame.children.length === 0) {
      var src = btn.dataset.src;
      var iframe = document.createElement('iframe');
      if (btn.dataset.pdf) {
        src += '#toolbar=0&navpanes=0';
      } else {
        iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      }
      iframe.src = src;
      frame.appendChild(iframe);
      btn.textContent = '▼  Close';
    } else {
      frame.innerHTML = '';
      btn.textContent = openLabel;
    }
  });
});

// Scroll reveal
var revealCards = document.querySelectorAll('.reveal');
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
