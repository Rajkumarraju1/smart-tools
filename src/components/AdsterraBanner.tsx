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

    const params = new URLSearchParams(window.location.search);
    const isDisabledUrl = params.get('disable_banner') === 'true' || params.get('disable_ads') === 'true';
    const isDisabledStorage = localStorage.getItem('disable_banner') === 'true' || localStorage.getItem('disable_ads') === 'true';
    
    if (isDisabledUrl || isDisabledStorage) {
      console.log(`Adsterra Banner ${id} is disabled via debug settings.`);
      return;
    }

    (window as any).__active_ads = (window as any).__active_ads || {};
    (window as any).__active_ads[`Banner-${id}`] = true;

    // Create a programmatically isolated iframe to host the banner scripts
    const iframe = document.createElement('iframe');
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms');
    
    container.appendChild(iframe);

    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; overflow: hidden; background: transparent; }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              var atOptions = {
                'key' : '${id}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${id}/invoke.js"></script>
          </body>
        </html>
      `);
      iframeDoc.close();
    }

    return () => {
      delete (window as any).__active_ads[`Banner-${id}`];
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
