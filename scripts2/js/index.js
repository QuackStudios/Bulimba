// index.js (modified)
document.addEventListener("DOMContentLoaded", () => {
  // ---------- video + sound logic (unchanged) ----------
  const video = document.getElementById("hero-video");
  const soundButton = document.getElementById("soundButton");
  const soundIcon = document.getElementById("soundIcon");

  if (video && soundButton && soundIcon) {
    soundButton.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        soundIcon.src = "assets/img-assets/volume-button.svg";
      } else {
        video.muted = true;
        soundIcon.src = "assets/img-assets/mute-button.svg";
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(video);
  } else {
    console.error("One or more elements (video, soundButton, soundIcon) are missing in the DOM.");
  }

  // ---------- scroll-linked color interpolation ----------
  // helper functions (same as yours)
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  const section1 = document.querySelector('.slider-section-wrapper');
  const section2 = document.querySelector('.awards-recognition-section');
  const colorStart = hexToRgb('#ffffff');
  const colorEnd = hexToRgb('#fffdfa');
  const extensionHeight = window.innerHeight * 0.4;

  // guard if sections missing
  if (!section1 || !section2) {
    console.warn('[index.js] Could not find section elements for color interpolation.');
    return;
  }

  // update function (calculates and applies background color)
  function updateBackgroundColor() {
    const section1Bottom = section1.getBoundingClientRect().bottom;
    const section2Top = section2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    let progress = Math.min(
      Math.max((windowHeight - section2Top) / (windowHeight + section1Bottom + extensionHeight), 0),
      1
    );

    const r = Math.round(lerp(colorStart.r, colorEnd.r, progress));
    const g = Math.round(lerp(colorStart.g, colorEnd.g, progress));
    const b = Math.round(lerp(colorStart.b, colorEnd.b, progress));

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  // Determine whether to use Lenis (desktop) or native scroll (mobile)
  // lenis-scroll.js will set window.lenis (object) on desktop, and window.isMobileScrollFallback true on mobile
  const hasLenis = !!window.lenis;
  const useNativeScroll = !!window.isMobileScrollFallback || !hasLenis;

  if (hasLenis) {
    // Lenis present: use its scroll event
    try {
      window.lenis.on('scroll', updateBackgroundColor);
      // Run once to initialize colors
      updateBackgroundColor();
      console.log('[index.js] using Lenis scroll events for color interpolation.');
    } catch (e) {
      console.warn('[index.js] error attaching to Lenis, falling back to native scroll:', e);
      fallbackToNative();
    }
  } else {
    // No Lenis: use native scroll with RAF batching
    fallbackToNative();
  }

  function fallbackToNative() {
    let ticking = false;
    // initial update
    updateBackgroundColor();

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateBackgroundColor();
          ticking = false;
        });
      }
    }, { passive: true });

    // Also listen to resize because window.innerHeight used in calculations
    window.addEventListener('resize', () => {
      // update extensionHeight if needed (recompute)
      // (You may want to re-calc extensionHeight if you expect viewport size to change.)
      requestAnimationFrame(updateBackgroundColor);
    }, { passive: true });

    console.log('[index.js] using native scroll + RAF batching for color interpolation.');
  }

  // No RAF loop here for Lenis — lenis-scroll.js manages the Lenis RAF when active.
});
