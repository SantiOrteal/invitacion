import React from 'react'

const sealTest = () => {
  return (
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
  )
}

export default sealTest