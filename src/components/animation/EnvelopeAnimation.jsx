import { useState, useEffect } from 'react';

const EnvelopeAnimation = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Call the onOpen callback after animation completes
      setTimeout(() => {
        onOpen && onOpen();
      }, 1200); // Wait for animation to complete
    }
  };

  // Responsive dimensions
  const envelopeWidth = isMobile ? 240 : 300;
  const envelopeHeight = isMobile ? 160 : 200;
  const borderWidth = isMobile ? 120 : 150;
  const borderHeight = isMobile ? 80 : 100;
  const sealSize = isMobile ? 40 : 50;

  return (
    <div
      className="relative flex justify-center cursor-pointer select-none"
      style={{
        height: `${envelopeHeight}px`,
        width: `${envelopeWidth}px`,
        backgroundColor: '#4a5944',
        zIndex: 0
      }}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Ancient Wax Seal */}
      <div
        className="absolute flex items-center justify-center font-bold text-amber-100"
        style={{
          width: `${sealSize}px`,
          height: `${sealSize}px`,
          top: '50%',
          left: '50%',
          marginTop: `-${sealSize / 2}px`,
          marginLeft: `-${sealSize / 2}px`,
          fontSize: isMobile ? '10px' : '12px',
          zIndex: 4,
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          transitionDelay: isOpen ? '0s' : '0.8s',
          background: `radial-gradient(circle at 30% 30%, #dc2626, #991b1b, #7f1d1d)`,
          borderRadius: '50%',
          boxShadow: `
            inset 2px 2px 4px rgba(220, 38, 38, 0.8),
            inset -2px -2px 4px rgba(127, 29, 29, 0.8),
            0 3px 8px rgba(0, 0, 0, 0.6),
            0 1px 3px rgba(0, 0, 0, 0.8)
          `,
          border: `2px solid #7f1d1d`,
          textShadow: `
            1px 1px 2px rgba(0, 0, 0, 0.8),
            0 0 4px rgba(127, 29, 29, 0.6)
          `,
          letterSpacing: '1px'
        }}
      >
        <div style={{
          transform: 'rotate(-5deg)',
          fontFamily: 'serif',
          fontWeight: 'bold'
        }}>
          PS
        </div>
      </div>

      {/* Lid One (top lid when closed) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          borderRight: `${borderWidth}px solid transparent`,
          borderBottom: `${borderHeight}px solid transparent`,
          borderLeft: `${borderWidth}px solid transparent`,
          borderTop: `${borderHeight}px solid #62745c`,
          transformOrigin: 'top',
          zIndex: 3,
          transform: isOpen ? 'rotateX(90deg)' : 'rotateX(0deg)',
          transition: 'transform 0.25s linear',
          transitionDelay: isOpen ? '0s' : '0.75s'
        }}
      />

      {/* Lid Two (back lid when opened) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          borderRight: `${borderWidth}px solid transparent`,
          borderBottom: `${borderHeight}px solid transparent`,
          borderLeft: `${borderWidth}px solid transparent`,
          borderTop: `${borderHeight}px solid #4a5944`,
          transformOrigin: 'top',
          zIndex: 1,
          transform: isOpen ? 'rotateX(180deg)' : 'rotateX(90deg)',
          transition: 'transform 0.25s linear',
          transitionDelay: isOpen ? '0.25s' : '0.5s'
        }}
      />

      {/* Envelope Body */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          borderTop: `${borderHeight}px solid transparent`,
          borderRight: `${borderWidth}px solid #abbaa7`,
          borderBottom: `${borderHeight}px solid #90a28a`,
          borderLeft: `${borderWidth}px solid #71856a`,
          zIndex: 3
        }}
      />

      {/* Letter */}
      <div
        className="absolute top-0 w-4/5 h-4/5 bg-white rounded-2xl flex items-center justify-center"
        style={{
          zIndex: 2,
          transform: isOpen ? `translateY(-${envelopeHeight * 0.25}px)` : 'translateY(0px)',
          transition: 'transform 0.5s ease-in-out',
          transitionDelay: isOpen ? '0.5s' : '0s'
        }}
      >
        <p 
          className="text-center"
          style={{ 
            color: '#3B4049',
            fontSize: isMobile ? '24px' : '30px'
          }}
        >
          ♥
        </p>
      </div>
    </div>
  );
};

export default EnvelopeAnimation;