import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import usePerformanceMode from '../hooks/usePerformanceMode';

const CursorGlow = () => {
  const [isHovering, setIsHovering] = useState(false);
  const springConfig = { damping: 25, stiffness: 200 };
  const glowX = useSpring(0, springConfig);
  const glowY = useSpring(0, springConfig);
  const { allowHeavyEffects } = usePerformanceMode();

  useEffect(() => {
    if (!allowHeavyEffects) return undefined;

    const handlePointerMove = (event) => {
      glowX.set(event.clientX);
      glowY.set(event.clientY);

      const isInteractive = Boolean(event.target.closest('a, button, .card, .project-card, .skill-card'));
      setIsHovering((currentState) =>
        currentState === isInteractive ? currentState : isInteractive
      );
    };

    const handlePointerLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [allowHeavyEffects, glowX, glowY]);

  if (!allowHeavyEffects) return null;

  return (
    <>
      <motion.div
        className="cursor-glow"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.4,
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="cursor-glow-trail"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2 : 1.5,
          opacity: isHovering ? 0.2 : 0.15,
        }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
    </>
  );
};

export default CursorGlow;
