import { motion } from "framer-motion";
import DressCodeSvg from "../../assets/svg/dressCode";

const DressCode = ({ fadeInUp }) => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[600px]"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto px-4 space-y-12">
        
        {/* Dress Code Card */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-5xl font-light mb-8 text-marfil-base"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Detalles del Evento
          </motion.h3>
          
          <div className="bg-marfil-base backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h2 className="text-5xl font-light mb-6 text-verde-musgo-base"
                  style={{ fontFamily: "'Dancing Script', cursive" }}>
                Dress Code
              </h2>
            <DressCodeSvg className="w-48 h-48 mx-auto fill-verde-musgo-base mb-6" />
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-verde-musgo-base">
                  {/* <span className="text-2xl">🤵</span> */}
                  <span className="font-semibold">Traje para caballeros</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-verde-musgo-base">
                  {/* <span className="text-2xl">👗</span> */}
                  <span className="font-semibold">Vestido largo para damas</span>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Separador decorativo */}
        <motion.div 
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-px bg-marfil-iluminado-1"></div>
          <div className="w-3 h-3 rounded-full bg-marfil-iluminado-1"></div>
          <div className="w-16 h-px bg-marfil-iluminado-1"></div>
        </motion.div>

        {/* No Niños Card */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3}}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-xl">
            <h4 className="text-4xl font-light mb-4 text-white"
                style={{ fontFamily: "'Dancing Script', cursive" }}>
              Celebración para Adultos
            </h4>
            <div className="text-7xl mb-6">🍸</div>
            <p className="text-marfil-base text-lg font-medium mb-2">
              Este evento es exclusivamente para adultos
            </p>
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full">
              <span className="text-white/90 text-sm font-semibold">No Niños</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}




// Exporta la opción que prefieras
export default DressCode;