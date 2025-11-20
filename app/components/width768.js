// "use client";

// import { useState, useEffect } from "react";

// export default function useIsAbove768() {
//   const [isAbove768, setIsAbove768] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsAbove768(window.innerWidth >= 768);

//     checkWidth();
//     window.addEventListener("resize", checkWidth);

//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   return isAbove768;
// }
