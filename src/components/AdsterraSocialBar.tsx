'use client';

import { useEffect } from 'react';

export default function AdsterraSocialBar() {
  useEffect(() => {
    // Check if social bar is disabled via URL parameter or localStorage
    const params = new URLSearchParams(window.location.search);
    const isDisabledUrl = params.get('disable_social') === 'true' || params.get('disable_ads') === 'true';
    const isDisabledStorage = localStorage.getItem('disable_social') === 'true' || localStorage.getItem('disable_ads') === 'true';
    
    if (isDisabledUrl || isDisabledStorage) {
      console.log('Adsterra Social Bar is disabled via debug settings.');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://pl30123012.effectivecpmnetwork.com/95/b5/44/95b54442391944749f2b2ce8d32d7a7c.js';
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
