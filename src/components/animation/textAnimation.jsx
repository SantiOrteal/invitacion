import { motion } from "framer-motion";

const textAnimation = ( { text }) => {
  return (
    <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <h1 className="text-black text-4xl font-bold mb-2 tracking-wide">
            {text}
          </h1>
          {/* <motion.p 
            className="text-gray-300 text-lg"
            animate={{ 
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.p> */}
    </motion.div>
  )
}

export default textAnimation