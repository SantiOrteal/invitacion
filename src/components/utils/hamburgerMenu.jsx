import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón del menú */}
        <motion.button
        className="buger-menu-container fixed top-6 left-3 z-50 bg-marfil-iluminado-2 backdrop-blur-sm border outline-none rounded-full p-3 
        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        >
            <Menu className="w-5 h-5 text-verde-musgo-base" />
        </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-marfil-base rounded-2xl shadow-lg p-6 m-6 w-full max-w-md h-3/4 flex flex-col gap-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Botón cerrar */}
              <button
                className="absolute top-3 right-3 p-1 rounded-full bg-marfil-base hover:bg-gray-300"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6 text-verde-musgo-base" />
              </button>

              <div className="text-center font-bold text-5xl mt-15 font-cursive text-verde-musgo-base ">
                Pamela & Santiago
              </div>

              <nav className="flex flex-col gap-7 text-center mt-5 overflow-auto">
                <a href="#hero" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Inicio
                </a>
                <a href="#itinerario" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Itinerario
                </a>
                <a href="#detalles-del-evento" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Detalles del Evento
                </a>
                <a href="#galeria" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Galeria
                </a>
                <a href="#hoteles" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Hoteles
                </a>
                <a href="#regalos" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Mesa de regalos
                </a>
                <a href="#confirmacion" rel="noopener noreferrer" className="hover:underline text-body text-2xl text-verde-musgo-base"  onClick={() => setIsOpen(false)}>
                  Confirmacion
                </a>

              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
