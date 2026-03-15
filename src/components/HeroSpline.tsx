import React, { lazy, Suspense, useState, useEffect } from 'react';

// Lazy load the Spline component to avoid blocking the initial page render
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function HeroSpline() {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Check if the device is mobile or low-end
    const isMobile = window.innerWidth < 768;
    // navigator.hardwareConcurrency gives the number of logical processors. 
    // If it's undefined (some older browsers), we assume it's okay to load, 
    // but typically <= 4 is considered lower end for heavy 3D WebGL scenes.
    const hwConcurrency = navigator.hardwareConcurrency || 4; 
    const isLowEnd = hwConcurrency <= 4; 

    if (isMobile || isLowEnd) {
      setShouldLoadSpline(false);
    } else {
      setShouldLoadSpline(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
      {/* Fallback background — always rendered, hidden once Spline loads or if Spline won't load */}
      <div 
        className={`absolute inset-0 bg-[#050505] transition-opacity duration-700 ease-in-out z-0 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30,30,30,1) 0%, rgba(5,5,5,1) 100%)'
        }}
      />

      {/* Spline scene — only load on capable devices */}
      {shouldLoadSpline && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 w-full h-full z-0" style={{ contain: 'strict' }}>
             <Spline
              scene="https://prod.spline.design/cwbokjEA8ZlZrm4n/scene.splinecode"
              onLoad={() => setLoaded(true)}
              className="w-full h-full"
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
