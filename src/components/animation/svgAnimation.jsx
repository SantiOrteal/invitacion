import { motion } from "framer-motion";

const SvgAnimation = () => {
  return (
    <div className="relative flex justify-center items-center mt-4" style={{ height: '80px', width: '60px' }}>
          {/* First Arrow */}
          <motion.svg
            width="40"
            height="30"
            viewBox="70 90 50 80"
            className="absolute text-black -rotate-90 mx-auto"
            animate={{ 
              x : [-40, 5, 5, 5],  
              opacity: [0, 1, 1, 0,]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.25, 0.7, 1]
            }}
            exit={{ opacity: 0 }}
          >
            <path
            fill="currentColor"
            d="M76.259,164.648c-0.64,0-1.28-0.244-1.768-0.733c-0.977-0.976-0.977-2.559,0-3.535l31.99-31.991
                l-31.99-31.991c-0.977-0.976-0.977-2.559,0-3.535c0.976-0.977,2.56-0.977,3.535,0l33.758,33.758c0.977,0.976,0.977,2.559,0,3.535
                l-33.758,33.758C77.539,164.403,76.898,164.648,76.259,164.648z"
            />
          </motion.svg>

          {/* Second Arrow */}
          <motion.svg
            width="40"
            height="30"
            viewBox="70 90 50 80"
            className="absolute text-black -rotate-90 mx-auto"
            animate={{ 
              x: [-50, -10, -10, -10],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: .15,
              times: [0, 0.25, 0.7, 1]
            }}
            exit={{ opacity: 0 }}
          >
            <path
            fill="currentColor"
            d="M76.259,164.648c-0.64,0-1.28-0.244-1.768-0.733c-0.977-0.976-0.977-2.559,0-3.535l31.99-31.991
                l-31.99-31.991c-0.977-0.976-0.977-2.559,0-3.535c0.976-0.977,2.56-0.977,3.535,0l33.758,33.758c0.977,0.976,0.977,2.559,0,3.535
                l-33.758,33.758C77.539,164.403,76.898,164.648,76.259,164.648z"
            />
          </motion.svg>
        </div>
  )
}

export default SvgAnimation