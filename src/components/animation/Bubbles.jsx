import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  // Generate random bubbles
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 50; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          color: `hsl(${Math.random() * 360}, 70%, 80%)`,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 5
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles on resize
    const handleResize = () => generateBubbles();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bubbleVariants = {
    initial: (custom) => ({
      x: custom.x,
      y: window.innerHeight + 100,
      scale: 0,
      opacity: 0
    }),
    animate: (custom) => ({
      x: [custom.x, custom.x + Math.sin(custom.id) * 100, custom.x],
      y: 0,
      scale: [0, 1, 1, 0],
      opacity: [0, 0.8, 0.8, 0],
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        repeat: Infinity,
        ease: "easeInOut",
        x: {
          duration: custom.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.8,
      transition: {
        duration: 0.1
      }
    }
  };

  const handleBubblePop = (id) => {
    setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    
    // Add a new bubble after a short delay
    setTimeout(() => {
      const newBubble = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        color: `hsl(${Math.random() * 360}, 70%, 80%)`,
        duration: Math.random() * 15 + 10,
        delay: 0
      };
      setBubbles(prev => [...prev, newBubble]);
    }, 1000);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background overlay for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" /> */}

      {/* Bubbles */}
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full cursor-pointer backdrop-blur-sm border border-white/20 z-2"
            style={{
              width: bubble.size,
              height: bubble.size,
              background: `radial-gradient(circle at 30% 30%, ${bubble.color}, transparent 70%)`,
              boxShadow: `
                inset 0 0 20px rgba(255, 255, 255, 0.3),
                0 0 20px rgba(255, 255, 255, 0.1),
                0 8px 32px rgba(0, 0, 0, 0.1)
              `
            }}
            custom={bubble}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleBubblePop(bubble.id)}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.3 }
            }}
          >
            {/* Inner highlight for realism */}
            <div 
              className="absolute rounded-full bg-white/40"
              style={{
                width: bubble.size * 0.3,
                height: bubble.size * 0.3,
                top: bubble.size * 0.15,
                left: bubble.size * 0.15,
                filter: 'blur(2px)'
              }}
            />
            
            {/* Smaller highlight */}
            <div 
              className="absolute rounded-full bg-white/60"
              style={{
                width: bubble.size * 0.15,
                height: bubble.size * 0.15,
                top: bubble.size * 0.1,
                left: bubble.size * 0.2,
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating particles for ambiance */}
      {/* {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))} */}

      {/* Instructions */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-white/70 text-center">
          Hover over bubbles to see them grow • Click to pop them
        </p>
      </motion.div> */}
    </div>
  );
};

export default BubbleAnimation;