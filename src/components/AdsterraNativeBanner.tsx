'use client';

import { useEffect, useRef } from 'react';

export default function AdsterraNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const params = new URLSearchParams(window.location.search);
    const isDisabledUrl = params.get('disable_native') === 'true' || params.get('disable_ads') === 'true';
    const isDisabledStorage = localStorage.getItem('disable_native') === 'true' || localStorage.getItem('disable_ads') === 'true';
    
    if (isDisabledUrl || isDisabledStorage) {
      console.log('Adsterra Native Banner is disabled via debug settings.');
      return;
    }

    (window as any).__active_ads = (window as any).__active_ads || {};
    (window as any).__active_ads['NativeBanner-pl30123010'] = true;

    // Create the container div that the Adsterra script targets
    const adContainer = document.createElement('div');
    adContainer.id = 'container-8afdaf114c7345f262af59df3fadb6cd';
    container.appendChild(adContainer);

    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pl30123010.effectivecpmnetwork.com/8afdaf114c7345f262af59df3fadb6cd/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    container.appendChild(script);

    return () => {
      delete (window as any).__active_ads['NativeBanner-pl30123010'];
      if (container) {
        container.innerHTML = '';
      }
    };

  }, []);

  return (
    <div
      className="w-full flex justify-center items-center my-6 mx-auto min-h-[250px] bg-gray-50/50 rounded-lg border border-gray-100/50"
      ref={containerRef}
    />
  );
}
