import { motion } from "framer-motion";
import DressCodeSvg from "../../assets/svg/dressCode";

const DressCode = ( {fadeInUp} ) => {
  return (
            <motion.section 
              className="py-16 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[600px] my-auto"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="text-center px-4">
                <motion.h3 
                  className="text-3xl xl:text-5xl font-light mb-8 text-white"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Dress Code
                </motion.h3>
                
                <motion.div
                  className="max-w-sm mx-auto bg-marfil-iluminado-1 rounded-3xl p-8 shadow-xl border border-mafia-iluminado-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                    <DressCodeSvg className="w-40 h-40 mx-auto fill-ocre-oscuro-base " /> 
                    <p className="text-2xl xl:text-3xl mb-4 text-ocre-oscuro-base font-semibold">Formal</p>
                    <p className="text-xl xl:text-1xl font-body text-ocre-oscuro-iluminado-2 font-medium bg-marfil-base px-4 py-2 rounded-full border border-ocre-oscuro-base">
                    No Niños
                  </p>
                </motion.div>
              </div>
            </motion.section>
  )
}

export default DressCode