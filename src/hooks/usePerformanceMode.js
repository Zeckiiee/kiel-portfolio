import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const getPerformanceFlags = (prefersReducedMotion) => {
  if (typeof window === 'undefined') {
    return {
      allowHeavyEffects: false,
      allowHoverEffects: false,
      allowParallax: false,
    };
  }

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isDesktopViewport = window.innerWidth >= 1024;
  const hasEnoughCpu = !navigator.hardwareConcurrency || navigator.hardwareConcurrency > 4;
  const hasEnoughMemory =
    typeof navigator.deviceMemory !== 'number' || navigator.deviceMemory > 4;

  const allowHoverEffects = !prefersReducedMotion && hasFinePointer && isDesktopViewport;
  const allowParallax = !prefersReducedMotion && isDesktopViewport;
  const allowHeavyEffects = allowHoverEffects && hasEnoughCpu && hasEnoughMemory;

  return {
    allowHeavyEffects,
    allowHoverEffects,
    allowParallax,
  };
};

const usePerformanceMode = () => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [flags, setFlags] = useState(() => getPerformanceFlags(prefersReducedMotion));

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateFlags = () => setFlags(getPerformanceFlags(prefersReducedMotion));

    updateFlags();
    window.addEventListener('resize', updateFlags);

    if (pointerQuery.addEventListener) {
      pointerQuery.addEventListener('change', updateFlags);
    } else {
      pointerQuery.addListener(updateFlags);
    }

    return () => {
      window.removeEventListener('resize', updateFlags);

      if (pointerQuery.removeEventListener) {
        pointerQuery.removeEventListener('change', updateFlags);
      } else {
        pointerQuery.removeListener(updateFlags);
      }
    };
  }, [prefersReducedMotion]);

  return {
    prefersReducedMotion,
    ...flags,
  };
};

export default usePerformanceMode;
