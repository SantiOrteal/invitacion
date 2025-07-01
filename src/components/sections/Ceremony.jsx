import { motion } from "framer-motion";
import { Heart, MapPin, Clock, MapPinned } from "lucide-react";
import RingsSvg from "../../assets/svg/rings"; 

const Ceremony = ( { fadeInUp } ) => {
  return (
            <motion.section 
              className="py-16 bg-marfil-iluminado-2 relative overflow-hidden"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border border-verde-musgo-iluminado-3 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 border border-verde-musgo-iluminado-3 rounded-full"></div>
              </div>
              
              <div className="text-center px-4 relative z-10">
                {/* Title */}
                <motion.div
                  className="inline-flex items-center gap-2 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* <Heart className="w-6 h-6 text-rose-500" fill="currentColor" /> */}
                  <RingsSvg className="w-15 h-15 text-black" />
                  <h3 className="text-3xl xl:text-5xl font-light font-fancy text-gray-700" >
                    Ceremonia Civil
                  </h3>
                </motion.div>
                
                {/* Card */}
                <motion.div 
                  className="max-w-md mx-auto bg-gradient-to-br from-oro-viejo-iluminado-2 to-oro-viejo-iluminado-3 rounded-3xl p-8 shadow-xl border border-rose-100"   
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-verde-musgo-iluminado-1 space-y-4">
                    <h4 className="text-xl font-semibold">Los Membrillos</h4>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-1 text-verde-musgo-base flex-shrink-0" />
                      <p className="font-body text-2xl body-size leading-relaxed">Frente Al Club Campestre, Av. 20 1565, Lourdes, 25070 Saltillo, Coah.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-4">
                      <Clock className="w-6 h-6 text-verde-musgo-base" />
                      <p className="text-3xl font-bold text-verde-musgo-iluminado-1">6:00 PM</p>
                    </div>
                    <motion.a 
                      href="https://maps.app.goo.gl/mrkCVyVWhYEbYXoL8" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-verde-musgo-iluminado-1 to-verde-musgo-base shadow-lg hover:shadow-xl transition-all duration-300" 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MapPinned className="w-4 h-4 text-white" />
                      Ver Ubicación
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.section>
    
  )
}

export default Ceremony