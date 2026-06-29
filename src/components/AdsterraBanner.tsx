'use client';

import { useEffect, useRef } from 'react';

interface AdsterraBannerProps {
  id: string;
  height: number;
  width: number;
}

export default function AdsterraBanner({ id, height, width }: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous elements to prevent multiple ads rendering on hot reload or re-render
    container.innerHTML = '';

    // Assign atOptions to window just before script loading
    (window as any).atOptions = {
      key: id,
      format: 'iframe',
      height: height,
      width: width,
      params: {},
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.highperformanceformat.com/${id}/invoke.js`;
    script.async = true;

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [id, height, width]);

  return (
    <div
      className="flex justify-center items-center my-4 mx-auto overflow-hidden bg-gray-50/50 rounded-lg border border-gray-100/50"
      style={{ width: `${width}px`, height: `${height}px` }}
      ref={containerRef}
    />
  );
}
