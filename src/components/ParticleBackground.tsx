import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  fadeSpeed: number;
  type: 'firefly' | 'star' | 'heart' | 'sparkle';
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle soft color palette
    const colors = [
      'rgba(124, 198, 254, ', // Sky blue #7CC6FE
      'rgba(205, 180, 219, ', // Lavender #CDB4DB
      'rgba(230, 194, 128, ', // Gold #E6C280
      'rgba(255, 255, 255, ', // White
    ];

    const particleCount = Math.min(45, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    const createParticle = (overrideY?: number): Particle => {
      const types: ('firefly' | 'star' | 'heart' | 'sparkle')[] = ['firefly', 'star', 'heart', 'sparkle'];
      const chosenType = types[Math.floor(Math.random() * types.length)];
      const maxOp = 0.15 + Math.random() * 0.35;

      return {
        x: Math.random() * width,
        y: overrideY !== undefined ? overrideY : Math.random() * height,
        size: chosenType === 'heart' ? 6 + Math.random() * 8 : 2 + Math.random() * 5,
        speedY: -(0.15 + Math.random() * 0.45),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * maxOp,
        maxOpacity: maxOp,
        fadeSpeed: 0.002 + Math.random() * 0.004,
        type: chosenType,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const drawHeart = (x: number, y: number, size: number, opacity: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
      ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fillStyle = `${color}${opacity})`;
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (x: number, y: number, size: number, opacity: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(0, 0, size, 0);
      ctx.quadraticCurveTo(0, 0, 0, size);
      ctx.quadraticCurveTo(0, 0, -size, 0);
      ctx.quadraticCurveTo(0, 0, 0, -size);
      ctx.fillStyle = `${color}${opacity})`;
      ctx.fill();
      ctx.restore();
    };

    const drawStar = (x: number, y: number, size: number, opacity: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = `${color}${opacity})`;
      ctx.fill();

      // Outer glow
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
      glow.addColorStop(0, `${color}${opacity * 0.5})`);
      glow.addColorStop(1, `${color}0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y < -30) {
          particles[index] = createParticle(height + 20);
        }

        if (p.type === 'heart') {
          drawHeart(p.x, p.y, p.size, p.opacity, p.color);
        } else if (p.type === 'sparkle') {
          drawSparkle(p.x, p.y, p.size, p.opacity, p.color);
        } else {
          drawStar(p.x, p.y, p.size, p.opacity, p.color);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
