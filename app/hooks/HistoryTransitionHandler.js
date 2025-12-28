"use client";

import { useEffect } from "react";

export default function HistoryDirection() {
  useEffect(() => {
    const onPopState = () => {
      window.__IS_HISTORY_NAV__ = true;
    };

    const onClick = (e) => {
      // tylko LEWY KLIK
      if (e.button !== 0) return;

      // jeśli to normalny klik w link
      const a = e.target.closest("a");
      if (!a) return;

      // ignoruj target _blank itp.
      if (a.target === "_blank") return;

      // 🔑 TO JEST NORMALNA NAWIGACJA
      window.__IS_HISTORY_NAV__ = false;
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
