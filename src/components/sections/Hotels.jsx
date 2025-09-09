import { motion } from "framer-motion";
import { MapPinned, Hotel, Star, Phone, Wifi, Car } from "lucide-react";

const Hotels = ( {fadeInUp} ) => {

    const hotels = [
    {
      name: "Hotel Hyatt",
      link: "https://maps.app.goo.gl/uJkz1CqQRfWMX6dx9",
      rating: 5,
      features: ["Wifi", "Estacionamiento", "Concierge", "Desayuno Buffete"],
      color: "from-ocre-oscuro-base to-ocre-oscuro-iluminado-1"
    },
    {
      name: "Hotel City Express",
      link: "https://maps.app.goo.gl/uQTkNq3T4mWxBBeF8",
      rating: 4,
      features: ["Wifi", "Estacionamiento", "Business Center", "Desayuno Americano"],
      color: "from-ocre-oscuro-base to-ocre-oscuro-iluminado-1"
    },
    {
      name: "Hotel AC",
      link: "https://maps.app.goo.gl/TzW9U88ycTCnHJpJA",
      rating: 5,
      features: ["Wifi", "Estacionamiento", "Restaurant", "Plan Europeo"],
      color: "from-ocre-oscuro-base to-ocre-oscuro-iluminado-1"
    }
  ];

    const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
                  <h3 className="text-4xl md:text-5xl font-light font-fancy text-white" >
                    Hoteles con Convenio
                  </h3>
                </motion.div>

                {/* Información */}

                <motion.p 
                  className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Hemos preparado opciones especiales de hospedaje para nuestros invitados de fuera de la ciudad
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6">
                  {hotels.map((hotel, index) => (
                    <motion.div
                      key={hotel.name}
                      className="group"
                      variants={cardVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                        {/* Gradiente decorativo superior */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hotel.color}`}></div>
                        
                        {/* Contenido principal */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-semibold text-ocre-oscuro-base group-hover:text-verde-musgo-base transition-colors">
                              {hotel.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(hotel.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>

                          {/* Características */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.features.map((feature, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-verde-musgo-base/10 text-verde-musgo-base rounded-full text-sm font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Botón/Link */}
                          <motion.a 
                            href={hotel.link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-verde-musgo-base to-verde-musgo-iluminado-1 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group-hover:from-verde-musgo-iluminado-1 group-hover:to-verde-musgo-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <MapPinned className="w-5 h-5" />
                            Ver Ubicación
                          </motion.a>
                        </div>

                        {/* Efecto de brillo en hover */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>


                {/* Información adicional */}
                <motion.div 
                  className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/90 text-center">
                    💡 <strong>Tip:</strong> Menciona nuestros nombres al hacer tu reservación para acceder a tarifas preferenciales
                  </p>
                </motion.div>
                
                {/* <motion.div
                  className="max-w-md mx-auto  bg-marfil-iluminado-1 rounded-3xl p-8 shadow-xl border border-marfil-base"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2 text-ocre-oscuro-base">
                      <MapPinned className="w-6 h-6 text-verde-musgo-base" />
                      <a href="https://maps.app.goo.gl/uJkz1CqQRfWMX6dx9" 
                        target="_blank" rel="noopener noreferrer" className="text-verde-musgo-base hover:text-ocre-oscuro-base visited:text-verde-musgo-base"> 
                        Hotel Hyatt
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-ocre-oscuro-base">
                      <MapPinned className="w-6 h-6 text-verde-musgo-base" />
                      <a href="https://maps.app.goo.gl/uQTkNq3T4mWxBBeF8" 
                        target="_blank" rel="noopener noreferrer" className="text-verde-musgo-base  hover:text-ocre-oscuro-base visited:text-verde-musgo-base">
                        Hotel City Express
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-ocre-oscuro-base">
                      <MapPinned className="w-6 h-6 text-verde-musgo-base" />
                      <a href="https://maps.app.goo.gl/TzW9U88ycTCnHJpJA" 
                        target="_blank" rel="noopener noreferrer" className="text-verde-musgo-base  hover:text-ocre-oscuro-base visited:text-verde-musgo-base">
                        Hotel AC
                      </a>
                    </li>
                  </ul>
                </motion.div> */}


              </div>
            </motion.section>
  )
}

export default Hotels