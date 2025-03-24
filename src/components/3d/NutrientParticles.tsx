import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Point, useTexture, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, Object3D, MathUtils } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const ParticlesFallback = () => (
  <div className="bg-transparent w-full h-full" />
);

const randomPosition = (scale = 10) => [
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale
];

const nutrientColors = [
  '#22c55e', // Vitamin A (Green)
  '#3b82f6', // Vitamin B (Blue)
  '#f97316', // Vitamin C (Orange)
  '#f59e0b', // Vitamin D (Amber)
  '#a855f7', // Vitamin E (Purple)
  '#ec4899', // Calcium (Pink)
  '#06b6d4', // Iron (Cyan)
  '#14b8a6', // Zinc (Teal)
  '#6366f1', // Folate (Indigo)
  '#d946ef'  // Iodine (Fuchsia)
];

const blueColors = [
  '#0ea5e9', // Sky blue
  '#2563eb', // Blue
  '#3b82f6', // Blue 500
  '#1d4ed8', // Blue 700
  '#60a5fa', // Blue 400
  '#93c5fd', // Blue 300
  '#38bdf8', // Sky 400
  '#0284c7', // Sky 600
  '#0369a1', // Sky 700
  '#7dd3fc'  // Sky 300
];

const greenColors = [
  '#22c55e', // Green 500
  '#16a34a', // Green 600
  '#15803d', // Green 700
  '#4ade80', // Green 400
  '#86efac', // Green 300
  '#10b981', // Emerald 500
  '#059669', // Emerald 600
  '#047857', // Emerald 700
  '#34d399', // Emerald 400
  '#6ee7b7'  // Emerald 300
];

type ColorType = 'multi' | 'blue' | 'green';

const getColorPalette = (color: ColorType) => {
  switch (color) {
    case 'blue': return blueColors;
    case 'green': return greenColors;
    default: return nutrientColors;
  }
};

const ParticleField = ({ 
  count = 100, 
  size = 0.2, 
  color = 'multi' as ColorType,
  animationSpeed = 1 
}) => {
  const pointsRef = useRef<any>();
  const [positions, setPositions] = useState<number[]>([]);
  const [colors, setColors] = useState<number[]>([]);
  const isMobile = useIsMobile();
  
  const adjustedCount = isMobile ? Math.floor(count * 0.5) : count;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const effectiveAnimationSpeed = prefersReducedMotion ? 0.2 : animationSpeed;
  
  useEffect(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const colorPalette = getColorPalette(color as ColorType);
    
    for (let i = 0; i < adjustedCount; i++) {
      const [x, y, z] = randomPosition();
      positions.push(x, y, z);
      
      const selectedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const r = parseInt(selectedColor.slice(1, 3), 16) / 255;
      const g = parseInt(selectedColor.slice(3, 5), 16) / 255;
      const b = parseInt(selectedColor.slice(5, 7), 16) / 255;
      colors.push(r, g, b);
    }
    
    setPositions(positions);
    setColors(colors);
  }, [adjustedCount, color]);
  
  useFrame((state) => {
    if (!pointsRef.current || prefersReducedMotion) return;
    
    pointsRef.current.rotation.x = MathUtils.lerp(
      pointsRef.current.rotation.x,
      state.mouse.y * 0.2,
      0.01 * effectiveAnimationSpeed
    );
    pointsRef.current.rotation.y = MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.mouse.x * 0.2,
      0.01 * effectiveAnimationSpeed
    );
    
    pointsRef.current.rotation.y += 0.001 * effectiveAnimationSpeed;
    
    if (!prefersReducedMotion) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const i3 = i / 3;
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i3) * 0.003 * effectiveAnimationSpeed;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  if (positions.length === 0) return null;
  
  return (
    <Points ref={pointsRef} limit={adjustedCount}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={new Float32Array(colors)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        alphaTest={0.5}
        depthWrite={false}
      />
    </Points>
  );
};

interface NutrientParticlesProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  color?: ColorType;
  reducedMotion?: boolean;
}

const NutrientParticles = ({ 
  className = "", 
  density = 'medium',
  interactive = true,
  color = 'multi',
  reducedMotion = false
}: NutrientParticlesProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const isMobile = useIsMobile();
  
  const getParticleCount = () => {
    const baseCounts = {
      low: 50,
      medium: 100,
      high: 200
    };
    
    if (isMobile) {
      return Math.floor(baseCounts[density] * 0.5);
    }
    
    return baseCounts[density];
  };

  useEffect(() => {
    setIsClient(true);
    
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || 
                 canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
    } catch (e) {
      console.log('WebGL not supported, falling back to static display');
      setIsWebGLAvailable(false);
    }
  }, []);
  
  if (!isClient || !isWebGLAvailable) {
    return <ParticlesFallback />;
  }
  
  const systemReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (reducedMotion && systemReducedMotion) {
    return <ParticlesFallback />;
  }
  
  const getAnimationSpeed = () => {
    if (systemReducedMotion) return 0.2;
    if (isMobile) return 0.7;
    return 1;
  };
  
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField 
            count={getParticleCount()} 
            size={isMobile ? 0.12 : 0.15} 
            color={color}
            animationSpeed={getAnimationSpeed()}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NutrientParticles;
