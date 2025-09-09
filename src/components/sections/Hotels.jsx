import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinned, Hotel, Star, Info } from "lucide-react";

const Hotels = ({ fadeInUp }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    {
      name: "Hotel Hyatt",
      link: "https://maps.app.goo.gl/uJkz1CqQRfWMX6dx9",
      rating: 5,
      features: ["Wifi", "Estacionamiento", "Concierge", "Desayuno Buffete"],
      color: "from-verde-musgo-base to-verde-musgo-iluminado-1",
      details: [
        {
          habitacion: "Sencilla",
          tarifa: "$2,205.00",
          impuestos: "$2,623.95",
          especificaciones: "1 o 2 Personas",
          incluye: "Desayuno Buffete",
          contacto: "8444273253",
          correo: "a.balderas@ahg.com.mx",
          nombre: "Andrea Balderas"
        },
        {
          habitacion: "Doble",
          tarifa: "$2,415.00",
          impuestos: "$2,873.85",
          especificaciones: "1 o 2 Personas",
          incluye: "Desayuno Buffete",
          contacto: "8444273253",
          correo: "a.balderas@ahg.com.mx",
          nombre: "Andrea Balderas"
        }
      ]
    },
    {
      name: "Hotel City Express Sur",
      link: "https://maps.app.goo.gl/uQTkNq3T4mWxBBeF8",
      rating: 4,
      features: ["Wifi", "Estacionamiento", "Business Center", "Desayuno Americano"],
      color: "from-ocre-oscuro-base to-ocre-oscuro-iluminado-1",
      details: [
        {
          habitacion: "Sencilla",
          tarifa: "$1,417.00",
          impuestos: "$1,686.23",
          especificaciones: "1 Cama Queen / 1 o 2 personas",
          incluye: "Desayuno Tipo Americano",
          contacto: "55 6448 8773",
          correo: "rfuentesr@norte19.com",
          nombre: "Rocio Fuentes"
        },
        {
          habitacion: "Doble",
          tarifa: "$1,598.00",
          impuestos: "$1,901.62",
          especificaciones: "2 Camas Mat / 2 Adultos y 2 menores",
          incluye: "Desayuno Tipo Americano",
          contacto: "56 6448 8773",
          correo: "rfuentesr@norte19.com",
          nombre: "Rocio Fuentes"
        },
        {
          habitacion: "Triple",
          tarifa: "$1,898.00",
          impuestos: "$2,258.62",
          especificaciones: "2 Camas Mat / 3 Adultos y 1 menor",
          incluye: "Desayuno Tipo Americano",
          contacto: "57 6448 8773",
          correo: "rfuentesr@norte19.com",
          nombre: "Rocio Fuentes"
        },
        {
          habitacion: "Cuádruple",
          tarifa: "$2,198.00",
          impuestos: "$2,615.62",
          especificaciones: "2 Camas Mat / 4 adultos",
          incluye: "Desayuno Tipo Americano",
          contacto: "58 6448 8773",
          correo: "rfuentesr@norte19.com",
          nombre: "Rocio Fuentes"
        }
      ]
    },
    {
      name: "Hotel AC",
      link: "https://maps.app.goo.gl/TzW9U88ycTCnHJpJA",
      rating: 5,
      features: ["Wifi", "Estacionamiento", "Restaurant", "Plan Europeo"],
      color: "from-ocre-oscuro-base to-ocre-oscuro-iluminado-1",
      details: [
        {
          habitacion: "STD King",
          tarifa: "$2,550.00",
          impuestos: "$3,034.50",
          especificaciones: "1 Cama King / 2 adultos",
          incluye: "Plan Europeo",
          contacto: "(844) 2771440",
          correo: "Daniela.ramos@fibrainn.mx",
          nombre: "Daniela Ramos"
        },
        {
          habitacion: "STD QNQN",
          tarifa: "$2,750.00",
          impuestos: "$3,272.50",
          especificaciones: "2 Camas Queen / 2 Adultos y 2 menores",
          incluye: "Plan Europeo",
          contacto: "(844) 2771440",
          correo: "Daniela.ramos@fibrainn.mx",
          nombre: "Daniela Ramos"
        }
      ]
    }
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
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
          <h3 className="text-4xl md:text-5xl font-light font-fancy text-white">
            Hoteles con Convenio
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.name}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hotel.color}`} />
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

                  <div className="flex flex-col gap-3">
                    <motion.a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-verde-musgo-base to-verde-musgo-iluminado-1 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MapPinned className="w-5 h-5" />
                      Ver Ubicación
                    </motion.a>

                    <motion.button
                      onClick={() => setSelectedHotel(hotel)}
                      className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-verde-musgo-base to-verde-musgo-iluminado-1 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Info className="w-5 h-5" />
                      Más Información
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedHotel && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
                  onClick={() => setSelectedHotel(null)}
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-verde-musgo-base mb-4">
                  {selectedHotel.name}
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-verde-musgo-base text-white">
                        <th className="p-2">Habitación</th>
                        <th className="p-2">Tarifa</th>
                        <th className="p-2">Con Impuestos</th>
                        <th className="p-2">Especificaciones</th>
                        <th className="p-2">Incluye</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedHotel.details.map((d, i) => (
                        <tr key={i} className="odd:bg-gray-50">
                          <td className="p-2">{d.habitacion}</td>
                          <td className="p-2">{d.tarifa}</td>
                          <td className="p-2">{d.impuestos}</td>
                          <td className="p-2">{d.especificaciones}</td>
                          <td className="p-2">{d.incluye}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <p className="text-sm">
                    <strong>Contacto:</strong> {selectedHotel.details[0].nombre} <br />
                    <strong>Tel:</strong> {selectedHotel.details[0].contacto} <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${selectedHotel.details[0].correo}`}
                      className="text-verde-musgo-base underline"
                    >
                      {selectedHotel.details[0].correo}
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Información adicional */}
      <motion.div 
        className="mt-12 sm:max-w-sm md:max-w-md xl:max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-white/90 text-center">
          💡 <strong>Tip:</strong> Menciona nuestros nombres al hacer tu reservación para acceder a tarifas preferenciales
        </p>
      </motion.div>

      </div>

    </motion.section>
  );
};

export default Hotels;
