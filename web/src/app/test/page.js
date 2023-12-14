'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText) 

import './test.css'
const YourComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(".text p", { type: "lines" });

    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center"
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="img">
        {/* Your image content */}
      </div>

      <div className="text">
        <p>Macaroon croissant pastry shortbread cupcake chupa chups pudding...</p>
      </div>

      <div className="img">
        {/* Your image content */}
      </div>
    </div>
  );
};

export default YourComponent;
