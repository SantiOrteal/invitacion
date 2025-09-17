import { motion } from "framer-motion";
import { Users } from "lucide-react";

const Rsvp = ( {fadeInUp} ) => {

    const whatsappLink = `https://wa.me/5218446599353?text=${encodeURIComponent(
        "Confirmar asistencia de [tu nombre]"
    )}`;

  return (
    <motion.section 
        className="py-16 bg-gradient-to-t from-verde-musgo-base to-verde-musgo-iluminado-1 text-marfil-base bg-textura min-h-[500px] flex items-center justify-center"
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
            <Users className="w-6 h-6 text-marfil-iluminado-1" />
            <h3 className="font-fancy text-4xl md:text-5xl font-light" >
            Confirmar Asistencia
            </h3>
        </motion.div>
        
        <motion.div
            className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="space-y-4">
            {/* <p className="text-lg xl:text-2xl">Wedding Planner</p> */}
            {/* <p className="text-white/90">Lugares Asignados: 2 Lugares</p> */}
            <p className="text-marfil-base body-size">Confirma tu asistencia antes del día </p>
            <p className="text-marfil-base body-size">18 | 10 | 2025 </p>
            <motion.button
                
                className="px-8 py-4 text-verde-musgo-base font-bold rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer">Confirmar Asistencia</a>
            </motion.button>
            </div>
        </motion.div>
        </div>
    </motion.section>
  )
}

export default Rsvp