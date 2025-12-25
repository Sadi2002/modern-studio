export function slideInOut() {
  if (!document.startViewTransition) return;
  if (window.__FIRST_LOAD__) return;
  if (window.__VT_KIND__ === "project") return;

  const isIntro = window.__VT_CONTEXT__ === "intro";

  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      {
        opacity: isIntro ? 1 : 0.75,
        transform: "translateY(-35%)",
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
  window.__VT_CONTEXT__ = null;
}
