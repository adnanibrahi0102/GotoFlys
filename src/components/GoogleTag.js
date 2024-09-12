
import React from 'react';

const GoogleTag = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16557317105';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-16557317105');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTag;
