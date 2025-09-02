import { motion } from 'framer-motion';

const DecorativeFlorarElements = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: .2, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };
  return (
    <>
        {/* Background decorative elements */}
        
        <div className="absolute inset-0 opacity-10">
          {/* Top left floral corner */}
          <div className="absolute -top-4 -left-4 w-32 h-32 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M50 50 Q80 30 110 50 Q130 80 110 110 Q80 130 50 110 Q30 80 50 50" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M70 40 Q90 35 95 55 Q90 75 70 80 Q50 75 45 55 Q50 35 70 40" 
                    fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Top right floral corner */}
          <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
            <svg viewBox="0 0 150 150" className="w-full h-full">
              <path d="M75 30 Q90 40 85 60 Q80 80 60 75 Q40 70 45 50 Q50 30 75 30" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Bottom left floral corner */}
          <div className="absolute -bottom-4 -left-4 w-40 h-40 opacity-20">
            <svg viewBox="0 0 250 250" className="w-full h-full">
              <path d="M60 60 Q100 40 140 60 Q160 100 140 140 Q100 160 60 140 Q40 100 60 60" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M80 70 Q110 60 120 90 Q110 120 80 130 Q50 120 40 90 Q50 60 80 70" 
                    fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Bottom right floral corner */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M100 50 Q130 40 150 70 Q140 100 110 110 Q80 100 70 70 Q80 40 100 50" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
        
        {/* Decorative floral elements */}
        <motion.div 
          className="absolute top-16 left-4 w-16 h-16 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 20 Q70 30 60 50 Q40 60 30 40 Q40 20 50 20" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M45 25 Q55 20 60 30 Q55 40 45 45 Q35 40 30 30 Q35 20 45 25" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-32 right-4 w-20 h-20 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 10 Q80 20 70 50 Q40 60 20 40 Q30 10 50 10" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M40 20 Q60 15 65 35 Q60 55 40 60 Q20 55 15 35 Q20 15 40 20" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-16 left-4 w-24 h-24 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 5 Q85 15 75 50 Q40 70 15 45 Q25 5 50 5" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M40 15 Q65 10 70 35 Q65 60 40 65 Q15 60 10 35 Q15 10 40 15" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-4 w-18 h-18 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 15 Q75 25 65 50 Q35 65 25 40 Q35 15 50 15" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>
    </>
  )
}

export default DecorativeFlorarElements