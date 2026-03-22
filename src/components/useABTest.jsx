import { useEffect, useState } from "react";

export function useABTest() {
  const [variant, setVariant] = useState("A");

  useEffect(() => {
    let saved = localStorage.getItem("ab_variant");

    if (!saved) {
      const variants = ["A", "B", "C"];
      saved = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem("ab_variant", saved);
    }

    setVariant(saved);
  }, []);

  return variant;
}
