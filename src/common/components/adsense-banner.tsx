import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight: "100px" }}
      data-ad-client="ca-pub-1979411024391745"
      data-ad-slot="7141218565"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}