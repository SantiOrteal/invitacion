import { motion, AnimatePresence } from "framer-motion";
import { Gift, X, Copy, Check } from "lucide-react";
import { useState } from "react";
import liverpoolSrc from "../../assets/icons/liverpool.png";
import banorteSrc from "../../assets/icons/banorte2.png";
import speiSrc from "../../assets/icons/spei.png";
import DecorativeFloralElements from "../utils/decorativeFlorarElements";

const Gifts = ( {fadeInUp, staggerChildren} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const bankData = {
    banco: "Banorte",
    titular: "Santiago Ortega Alcantara", // Cambia por el nombre del titular
    clabe: "072078010660181500", // Cambia por tu CLABE real
    cuenta: "1234567890", // Cambia por tu número de cuenta real
    tarjeta: "4189 1431 6090 7245" // Cambia por tu número de tarjeta real
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleBanorteClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.section 
          className="py-16 bg-marfil-iluminado-1 bg-old-letter min-h-110 flex justify-center items-center relative"
          id="regalos"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center px-4 z-2">

            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Gift className="w-10 h-10 text-verde-musgo-base" />
              <h3 className="font-fancy text-5xl font-light text-verde-musgo-base">
                Mesa de Regalos
              </h3>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png", alt: "Amazon", href: "https://www.amazon.com.mx/wedding/share/Pamela-Santiago-Boda", onClick: null },
                { src: liverpoolSrc, alt: "Liverpool", href: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51662625", onClick: null },
                { src: banorteSrc, alt: "Transferencia", href: "#", onClick: handleBanorteClick }
              ].map((item, index) => (
                <motion.a 
                  key={item.alt}
                  href={item.href} 
                  target={item.onClick ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  onClick={item.onClick || undefined}
                  variants={{
                    initial: { opacity: 0, y: 50, scale: 0.8 },
                    animate: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <img src={item.src} className="w-16 h-16 rounded-xl" alt={item.alt} />
                </motion.a>
              ))}
            </motion.div>

          </div>
          
          <DecorativeFloralElements />

        </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src={banorteSrc} className="w-10 h-10 rounded-lg" alt="Banorte" />
                  <h3 className="text-xl font-semibold text-verde-musgo-base">
                    Datos Bancarios
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Bank Data */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">Banco</label>
                  </div>
                  <div className="text-lg font-medium text-gray-900">{bankData.banco}</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">Titular</label>
                  </div>
                  <div className="text-lg font-medium text-gray-900">{bankData.titular}</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">CLABE</label>
                    <button
                      onClick={() => copyToClipboard(bankData.clabe, 'clabe')}
                      className="flex items-center gap-1 text-verde-musgo-base hover:text-verde-musgo-iluminado-1 transition-colors"
                    >
                      {copiedField === 'clabe' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copiedField === 'clabe' ? 'Copiado' : 'Copiar'}
                      </span>
                    </button>
                  </div>
                  <div className="text-lg font-mono text-gray-900">{bankData.clabe}</div>
                </div>

                {/* <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">Número de Cuenta</label>
                    <button
                      onClick={() => copyToClipboard(bankData.cuenta, 'cuenta')}
                      className="flex items-center gap-1 text-verde-musgo-base hover:text-verde-musgo-iluminado-1 transition-colors"
                    >
                      {copiedField === 'cuenta' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copiedField === 'cuenta' ? 'Copiado' : 'Copiar'}
                      </span>
                    </button>
                  </div>
                  <div className="text-lg font-mono text-gray-900">{bankData.cuenta}</div>
                </div> */}

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-600">Número de Tarjeta</label>
                    <button
                      onClick={() => copyToClipboard(bankData.tarjeta.replace(/\s/g, ''), 'tarjeta')}
                      className="flex items-center gap-1 text-verde-musgo-base hover:text-verde-musgo-iluminado-1 transition-colors"
                    >
                      {copiedField === 'tarjeta' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="text-sm">
                        {copiedField === 'tarjeta' ? 'Copiado' : 'Copiar'}
                      </span>
                    </button>
                  </div>
                  <div className="text-lg font-mono text-gray-900">{bankData.tarjeta}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 p-4 bg-verde-musgo-base/10 rounded-xl">
                <p className="text-sm text-verde-musgo-base text-center">
                  💝 ¡Gracias por acompañarnos en este día tan especial!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gifts