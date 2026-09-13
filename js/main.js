(() => {
  const site = window.SITE || {};

  // Wire configurable links
  document.querySelectorAll('[data-x-link]').forEach((el) => {
    el.setAttribute('href', site.X_URL || '#');
  });
  document.querySelectorAll('[data-buy-link]').forEach((el) => {
    el.setAttribute('href', site.BUY_URL || '#');
  });

  // Fill dynamic text
  document.querySelectorAll('[data-chain]').forEach((el) => {
    el.textContent = site.chain || 'ROBINHOOD CHAIN';
  });
  document.querySelectorAll('[data-ticker]').forEach((el) => {
    el.textContent = site.ticker || '$MIKE';
  });
  document.querySelectorAll('[data-supply]').forEach((el) => {
    el.textContent = site.totalSupply || '1,000,000,000';
  });
  document.querySelectorAll('[data-tax]').forEach((el) => {
    el.textContent = `${site.tax || '0%'} — ${site.taxNote || 'JUST VIBES'}`;
  });
  document.querySelectorAll('[data-tagline]').forEach((el) => {
    el.textContent = site.tagline || '';
  });

  // Navbar mobile menu
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  const setMenu = (open) => {
    if (!toggle || !mobileMenu || !header) return;
    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.hidden = !open;
    header.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
  });

  mobileMenu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setMenu(false));
  });

  // Sticky header style on scroll
  const onScrollHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  // Scroll progress bar
  const progress = document.querySelector('.scroll-progress');
  const onScrollProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${value})`;
  };
  onScrollProgress();
  window.addEventListener('scroll', onScrollProgress, { passive: true });

  // Floating X button
  const floatBtn = document.querySelector('.float-x');
  const onScrollFloat = () => {
    floatBtn?.classList.toggle('is-visible', window.scrollY > 420);
  };
  onScrollFloat();
  window.addEventListener('scroll', onScrollFloat, { passive: true });

  // Reveal on scroll (both up and down)
  const reveals = document.querySelectorAll('.reveal');
  let lastY = window.scrollY;
  let scrollDir = 'down';

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 2) {
        scrollDir = y > lastY ? 'down' : 'up';
        lastY = y;
      }
    },
    { passive: true }
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove('is-in', 'from-up', 'from-down');
            el.classList.add(scrollDir === 'up' ? 'from-up' : 'from-down');
            // Restart transition so it plays every time
            void el.offsetWidth;
            requestAnimationFrame(() => {
              el.classList.add('is-in');
            });
          } else {
            el.classList.remove('is-in');
            el.classList.toggle('from-up', scrollDir === 'down');
            el.classList.toggle('from-down', scrollDir === 'up');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Copy CA
  const copyBtn = document.querySelector('[data-copy-ca]');
  const caShort = document.querySelector('[data-ca-short]');
  const caLabel = document.querySelector('[data-ca-label]');
  const address = (site.CONTRACT_ADDRESS || '').trim();

  if (caShort) caShort.textContent = address
    ? `${address.slice(0, 6)}…${address.slice(-4)}`
    : 'CA SOON';

  if (copyBtn) {
    if (!address) copyBtn.setAttribute('disabled', 'true');
    copyBtn.addEventListener('click', async () => {
      if (!address) return;
      try {
        await navigator.clipboard.writeText(address);
        if (caLabel) {
          caLabel.textContent = 'Copied!';
          setTimeout(() => {
            caLabel.textContent = 'Copy CA';
          }, 1600);
        }
      } catch {
        /* ignore */
      }
    });
  }

  // DexScreener embed
  const chartFrame = document.querySelector('[data-dex-frame]');
  const chartPlaceholder = document.querySelector('[data-dex-placeholder]');
  const dex = (site.DEXSCREENER_URL || '').trim();
  if (dex && chartFrame) {
    const src = `${dex}${dex.includes('?') ? '&' : '?'}embed=1&theme=dark&trades=0&info=0`;
    chartFrame.src = src;
    chartFrame.hidden = false;
    chartPlaceholder?.setAttribute('hidden', 'true');
  }
})();
