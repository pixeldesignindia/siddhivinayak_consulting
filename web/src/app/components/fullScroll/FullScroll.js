'use client';
import React, { useEffect } from 'react';

const FullScroll = () => {
  useEffect(() => {
    let fullPageScrollInstance;

    const script = document.createElement('script');
    script.src =
      'https://rawgit.com/almeida-matheus/fullPageScrollPureJS/master/app/assets/javascript/full-page-scroll.js';
    script.async = true;

    script.onload = () => {
      fullPageScrollInstance = new fullScroll({
        mainElement: 'main',
        displayDots: true,
        dotsPosition: 'right',
        animateTime: 0.7,
        animateFunction: 'ease',
      });
    };

    document.body.appendChild(script);

    return () => {

      script.onload = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default FullScroll;
