import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Countdown = ( { timeLeft, fadeInUp, staggerChildren } ) => {
  return (
     <motion.section 
              className="py-16 bg-gradient-to-t from-verde-musgo-base to-verde-musgo-iluminado-1"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="text-center px-4">
                <motion.div
                  className="inline-flex items-center gap-2 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-6 h-6 text-white" />
                  <h2 className="text-3xl xl:text-5xl font-fancy font-light text-white">
                    Faltan
                  </h2>
                </motion.div>
                
                <motion.div 
                  className="flex gap-6 justify-center text-xl"
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { value: timeLeft.days, label: 'días' },
                    { value: timeLeft.hours, label: 'horas' },
                    { value: timeLeft.minutes, label: 'min' },
                    { value: timeLeft.seconds, label: 'seg' }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      className="flex flex-col items-center bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-oro-viejo-base"
                      variants={{
                        initial: { opacity: 0, y: 50, scale: 0.8 },
                        animate: { opacity: 1, y: 0, scale: 1 }
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <span className="text-2xl xl:text-4xl font-bold text-ocre-oscuro-base mb-2">{item.value}</span>
                      <span className="text-sm text-ocre-oscuro-iluminado-1 font-medium uppercase tracking-wide">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
  )
}

export default Countdown