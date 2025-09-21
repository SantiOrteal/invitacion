import { motion } from "framer-motion";
import WeddingNames from "../animation/WeddingNames";
import heroImg from "../../assets/images/psbody.jpg";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="hero">
        {/* Filter gradient img */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
      <img 
        src={heroImg} 
        alt="Pamela y Santiago" 
        className="w-full h-full object-cover"
      />
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              rotate: 0
            }}
            animate={{ 
              y: -50,
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Heart className="w-6 h-6" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Heart animation */}
        {/* <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Heart className="w-16 h-16 mx-auto mb-4 text-rose-300" fill="currentColor" />
        </motion.div> */}
        
        <WeddingNames />

        <motion.p 
          className="text-lg md:text-xl xl:text-2xl font-body font-light tracking-widest opacity-90 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Nuestra Boda
        </motion.p>

      </motion.div>
    </div>
  )
}

export default Hero