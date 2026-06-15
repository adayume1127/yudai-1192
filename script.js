// ===== シェアボタン =====
(() => {
  const buttons = document.querySelectorAll('[data-share]');
  if (!buttons.length) return;

  const pageUrl = location.href;
  const pageTitle = document.title;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      switch (btn.dataset.share) {
        case 'x': {
          const params = new URLSearchParams({ text: pageTitle, url: pageUrl });
          window.open(`https://twitter.com/intent/tweet?${params}`, '_blank', 'noopener');
          break;
        }
        case 'line': {
          const params = new URLSearchParams({ url: pageUrl });
          window.open(`https://social-plugins.line.me/lineit/share?${params}`, '_blank', 'noopener');
          break;
        }
        case 'copy': {
          navigator.clipboard.writeText(pageUrl).then(() => {
            const original = btn.textContent;
            btn.textContent = 'コピーしました!';
            btn.classList.add('is-copied');
            setTimeout(() => {
              btn.textContent = original;
              btn.classList.remove('is-copied');
            }, 2000);
          });
          break;
        }
      }
    });
  });
})();
