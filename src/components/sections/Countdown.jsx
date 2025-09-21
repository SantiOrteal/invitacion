import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Countdown = ( { timeLeft, fadeInUp, staggerChildren } ) => {
  return (
     <motion.section 
              className="py-32 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[400px]"
              id="faltan"
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
                  <Clock className="w-10 h-10 text-white" />
                  <h2 className="text-5xl xl:text-5xl font-fancy font-light text-white">
                    Faltan
                  </h2>
                </motion.div>
                
                <motion.div 
                  className=" mx-auto flex w-5/6 md:w-1/3   gap-6 justify-center text-xl bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 4 md:p-6 shadow-lg "
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
                      className="flex flex-col items-center"
                      variants={{
                        initial: { opacity: 0, y: 50, scale: 0.8 },
                        animate: { opacity: 1, y: 0, scale: 1 }
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <span className="text-2xl xl:text-4xl font-bold text-marfil-base mb-2">{item.value}</span>
                      <span className="text-sm text-marfil-iluminado-1 font-medium uppercase tracking-wide">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>
  )
}

export default Countdown