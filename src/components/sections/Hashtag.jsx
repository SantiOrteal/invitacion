import { motion } from "framer-motion";
import DecorativeFlorarElements from "../utils/decorativeFlorarElements";

const Hashtag = ( {fadeInUp} ) => {
  return (
    <motion.section 
        className="py-16 bg-white bg-marfil-iluminado-1 bg-old-letter relative min-h-[500px] flex items-center justify-center"
        id="hashtag"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
    >
        <div className="text-center px-4 z-2">
        <motion.h3 
            className="font-fancy text-4xl md:text-5xl font-light mb-6 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            #PamelaySantiagoWedding
        </motion.h3>
        
        <motion.div
            className="max-w-sm mx-auto bg-gradient-to-br from-verde-musgo-base to-verde-musgo-iluminado-1 rounded-3xl p-8 shadow-xl border border-verde-musgo-iluminado-1" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <p className="mb-4 text-white body-size font-light leading-relaxed">
            Comparte todas tus fotografías del evento, usando el hashtag en tus publicaciones de Facebook e Instagram.
            </p>
            <p className="text-white body-size font-light leading-relaxed">
            Por favor ayúdanos a recopilar recuerdos etiquetando tus fotos.
            </p>
        </motion.div>
        </div>
        <DecorativeFlorarElements />
    </motion.section>
  )
}

export default Hashtag