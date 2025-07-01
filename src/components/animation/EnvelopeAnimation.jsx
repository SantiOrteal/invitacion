import { useState } from 'react';
import { motion } from 'framer-motion';

const EnvelopeAnimation = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInteraction = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Call the onOpen callback after animation completes
      setTimeout(() => {
        onOpen && onOpen();
      }, 1200); // Wait for animation to complete
    }
  };

  return (
    <div className="flex justify-center items-center bg-black">
      <motion.div
        className="relative flex justify-center cursor-pointer select-none"
        style={{
          height: '200px',
          width: '300px',
          backgroundColor: '#4a5944',
          zIndex: 0
        }}
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
      >
        {/* Lid One (top lid when closed) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            borderRight: '150px solid transparent',
            borderBottom: '100px solid transparent',
            borderLeft: '150px solid transparent',
            borderTop: '100px solid #62745c',
            transformOrigin: 'top',
            zIndex: 3
          }}
          animate={{
            rotateX: isOpen ? 90 : 0
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
            delay: isOpen ? 0 : 0.75
          }}
        />

        {/* Lid Two (back lid when opened) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            borderRight: '150px solid transparent',
            borderBottom: '100px solid transparent',
            borderLeft: '150px solid transparent',
            borderTop: '100px solid #4a5944',
            transformOrigin: 'top',
            zIndex: 1
          }}
          animate={{
            rotateX: isOpen ? 180 : 90
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
            delay: isOpen ? 0.25 : 0.5
          }}
        />

        {/* Envelope Body */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            borderTop: '100px solid transparent',
            borderRight: '150px solid #abbaa7',
            borderBottom: '100px solid #90a28a',
            borderLeft: '150px solid #71856a',
            zIndex: 3
          }}
        />

        {/* Letter */}
        <motion.div
          className="absolute top-0 w-4/5 h-4/5 bg-white rounded-2xl"
          style={{
            zIndex: 2
          }}
          animate={{
            y: isOpen ? -50 : 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: isOpen ? 0.5 : 0
          }}
        >
          <p 
            className="text-center text-3xl mt-8"
            style={{ color: '#3B4049' }}
          >
            ♥
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnvelopeAnimation;