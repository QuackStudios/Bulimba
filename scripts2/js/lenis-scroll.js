// lenis-scroll.js
// (Replace the old file with this)

(function () {
  // mobile detection: treat touch devices or narrow viewports as mobile
  const isMobile = window.innerWidth < 900 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Expose a flag and lenis reference on window for other scripts
  window.isMobileScrollFallback = isMobile;
  window.lenis = null;

  // helper to restore native page styles (safe)
  function restoreNativeScrollStyles() {
    try {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.documentElement.style.touchAction = 'auto';
      document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.body.style.touchAction = 'auto';
    } catch (e) { /* ignore */ }
  }

  if (isMobile) {
    // On mobile: ensure Lenis not used and native scroll is allowed
    restoreNativeScrollStyles();
    console.log('[lenis-scroll] mobile detected — using native scrolling. Lenis disabled.');
    window.lenis = null;
    return;
  }

  // Desktop: initialize Lenis if available via global (script tag) or module import fallback
  try {
    // Prefer global Lenis (because you included the CDN script)
    const LenisCtor = window.Lenis || window.Lenis || null;

    if (!LenisCtor) {
      console.warn('[lenis-scroll] Lenis not found on window; ensure CDN script loaded. Trying dynamic import as fallback.');
      // dynamic import fallback (shouldn't be necessary if CDN script is included)
      // NOTE: dynamic import may not work with older setups; it's a fallback
      import('https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/bundled/lenis.min.js')
        .then(mod => {
          const LenisFromModule = mod?.default || mod?.Lenis || mod;
          initLenis(LenisFromModule);
        })
        .catch(err => {
          console.error('[lenis-scroll] failed to import Lenis:', err);
          restoreNativeScrollStyles();
        });
      return;
    }

    initLenis(LenisCtor);
  } catch (e) {
    console.error('[lenis-scroll] error initializing Lenis:', e);
    restoreNativeScrollStyles();
  }

// init function
function initLenis(Lenis) {
  // Initialize Lenis for desktop
  const lenis = new Lenis({
    // PREVIOUSLY: lerp: 0.1
    // NOW: A smaller value for a longer, smoother stop.
    lerp: 0.02, // <-- CHANGE THIS VALUE

    // Keep these settings
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  // ... rest of the function is the same ...

  // Expose globally
  window.lenis = lenis;

  // RAF loop
  function raf(time) {
      if (window.lenis && typeof window.lenis.raf === 'function') {
          window.lenis.raf(time);
      }
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  console.log('[lenis-scroll] Lenis initialized (desktop).');
}


})();
