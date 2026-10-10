"use client";

import { useEffect, useRef, useState } from "react";

export default function Foto({ src, alt, className = "" }) {
  const [gagal, setGagal] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setGagal(true);
  }, []);

  if (!src || gagal) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-brand to-logo-blue p-3 text-center text-sm font-semibold text-white/90 ${className}`}>
        {alt}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt={alt} className={className} loading="lazy" onError={() => setGagal(true)} />;
}