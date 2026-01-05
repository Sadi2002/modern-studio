export function slideInOut() {
  if (!document.startViewTransition) return;
  if (window.__FIRST_LOAD__) return;
  if (window.__VT_KIND__ === "project") return;

  window.__SCROLL_LOCKED__ = true;
  window.__LENIS__?.stop();

  const isIntro = window.__VT_CONTEXT__ === "intro";

  document.documentElement.animate(
    [
      { opacity: 1, transform: "translate3d(0, 0, 0)" },
      {
        opacity: isIntro ? 1 : 0.75,
        transform: "translate3d(0, -35%, 0)",
      },
    ],
    {
      duration: 1200,
      easing: "cubic-bezier(0.75,0.10,0.22,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
    ],
    {
      duration: 1200,
      easing: "cubic-bezier(0.75,0.10,0.22,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );

  // 🔄 posprzątaj po sobie
  // 🔄 posprzątaj po sobie
  // 🔄 posprzątaj po sobie
  window.__VT_CONTEXT__ = null;

  // 🔥 START CONTENTU — minimalny overlap (jak intro)
  queueMicrotask(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("app-content-start"));
    }, 300); // 👈 KLUCZ: 80–150ms
  });

  // ✅ LOGICZNY KONIEC TRANSITION
  setTimeout(() => {
    window.dispatchEvent(new Event("app-ready"));
  }, 1200);
}
