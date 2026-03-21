import { useEffect, useState } from "react";

const COUNTRY_CONFIG = {
  US: { tier: "Tier1", price: 29 },
  UK: { tier: "Tier1", price: 29 },
  CA: { tier: "Tier1", price: 29 },

  DE: { tier: "Tier2", price: 19 },
  FR: { tier: "Tier2", price: 19 },

  IN: { tier: "Tier3", price: 5 },
  BD: { tier: "Tier3", price: 5 },
};

const DEFAULT = { tier: "Tier3", price: 5 };

export default function GeoPricing() {
  const [geo, setGeo] = useState({ country: "", tier: "", price: 0 });

  const getUserLocation = async () => {
    const cached = localStorage.getItem("geo");
    if (cached) return JSON.parse(cached);

    try {
      const res = await fetch("https://api.country.is/");
      const data = await res.json();

      const result = {
        country: data.country,
        ... (COUNTRY_CONFIG[data.country] || DEFAULT)
      };

      localStorage.setItem("geo", JSON.stringify(result));
      return result;
    } catch {
      return { country: "unknown", ...DEFAULT };
    }
  };

  useEffect(() => {
    getUserLocation().then(setGeo);
  }, []);

  if (!geo.country) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      {geo.tier === "Tier1" && (
        <>
          <h2>$29 - Full Interview Pack</h2>
          <button>Buy Now</button>
        </>
      )}

      {geo.tier === "Tier2" && (
        <>
          <h2>$19 - Special EU Price</h2>
          <button>Get Access</button>
        </>
      )}

      {geo.tier === "Tier3" && (
        <>
          <h2>🎁 Special Regional Price: $5</h2>
          <p>Affordable access for your region</p>
          <button>Upgrade Now</button>
        </>
      )}
    </div>
  );
}