import { motion } from "framer-motion";
import { MapPinned, Hotel } from "lucide-react";

const Hotels = ( {fadeInUp} ) => {
  return (
    <motion.section 
              className="py-16 bg-gradient-to-t from-verde-musgo-base to-verde-musgo-iluminado-1 bg-textura"
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
                  <Hotel className="w-10 h-10 text-white" /> 
                  <h3 className="text-3xl xl:text-5xl font-light font-fancy text-white" >
                    Hoteles
                  </h3>
                </motion.div>
                
                <motion.div
                  className="max-w-md mx-auto  bg-marfil-iluminado-1 rounded-3xl p-8 shadow-xl border border-marfil-base"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2 text-ocre-oscuro-base">
                      <MapPinned className="w-6 h-6 text-verde-musgo-base" />
                      Hotel 1 - Dirección
                    </li>
                    <li className="flex items-center gap-2 text-ocre-oscuro-base">
                      <MapPinned className="w-6 h-6 text-verde-musgo-base" />
                      Hotel 2 - Dirección
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
  )
}

export default Hotels