import { motion } from "framer-motion";

const WeddingNames = () => {
  return (
    <>
      <motion.h1 
        className="relative text-4xl md:text-6xl font-cursive mb-4 w-full max-w-2xl h-80 md:h-96 heading-1 font-cursive tracking-wider" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        {/* Pamela - Top Left */}
        <motion.span 
          className="absolute top-0 left-0 pointer-events-none"
          initial={{ opacity: 0, x: -50, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Pamela
        </motion.span>
        
        {/* & Symbol - Center, Bigger */}
        <motion.span 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl  font-light pointer-events-none"
          // rotate: -180
          initial={{ opacity: 0, scale: 0.3 }}
          // rotate: 0
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 1, type: "spring", bounce: 0.4 }}
          // style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          &
        </motion.span>
        
        {/* Santiago - Bottom Right */}
        <motion.span 
          className="absolute bottom-0 right-0 pointer-events-none"
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Santiago
        </motion.span>

        {/* Decorative elements */}
        {/* <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-rose-300 rounded-full opacity-60"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-300 rounded-full opacity-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
        
        <motion.div
          className="absolute top-1/3 left-1/6 w-1 h-1 bg-rose-400 rounded-full opacity-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.5 }}
        /> */}
        {/* Names example */}
        {/* <motion.h1 
          className=" heading-1 text-4xl md:text-6xl font-cursive mb-4 w-2/4 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
            <span className="w-full block text-left">Pamela</span>
            <span className="w-full block text-center my-10">&</span>
            <span className="w-full block text-right">Santiago</span>
        </motion.h1> */}

      </motion.h1>
    </>
  );
};

export default WeddingNames;