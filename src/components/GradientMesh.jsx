import { useEffect, useRef } from 'react';
import usePerformanceMode from '../hooks/usePerformanceMode';

const GradientMesh = () => {
  const meshRef = useRef(null);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const { allowHeavyEffects } = usePerformanceMode();

  useEffect(() => {
    if (!allowHeavyEffects) return undefined;

    const mesh = meshRef.current;
    if (!mesh) return undefined;

    const updateMeshPosition = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      mesh.style.setProperty('--mouse-x', current.x.toFixed(3));
      mesh.style.setProperty('--mouse-y', current.y.toFixed(3));

      const shouldContinue =
        Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001;

      if (shouldContinue) {
        frameRef.current = window.requestAnimationFrame(updateMeshPosition);
      } else {
        frameRef.current = 0;
      }
    };

    const queueUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(updateMeshPosition);
    };

    const handleMouseMove = (event) => {
      targetRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
      queueUpdate();
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      queueUpdate();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [allowHeavyEffects]);

  if (!allowHeavyEffects) return null;

  return (
    <div ref={meshRef} className="gradient-mesh" aria-hidden="true">
      <div className="mesh-blob-wrapper mesh-blob-wrapper-1">
        <div className="mesh-blob mesh-blob-1" />
      </div>
      <div className="mesh-blob-wrapper mesh-blob-wrapper-2">
        <div className="mesh-blob mesh-blob-2" />
      </div>
      <div className="mesh-blob-wrapper mesh-blob-wrapper-3">
        <div className="mesh-blob mesh-blob-3" />
      </div>
      <div className="mesh-blob-wrapper mesh-blob-wrapper-4">
        <div className="mesh-blob mesh-blob-4" />
      </div>
      <div className="mesh-overlay" />
    </div>
  );
};

export default GradientMesh;
