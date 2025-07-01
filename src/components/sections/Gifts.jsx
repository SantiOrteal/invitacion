import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import liverpoolSrc from "../../assets/icons/liverpool.png";
import banorteSrc from "../../assets/icons/banorte2.png";
import speiSrc from "../../assets/icons/spei.png";

const Gifts = ( {fadeInUp, staggerChildren} ) => {
  return (
    <motion.section 
              className="py-16 bg-white"
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
                  <Gift className="w-10 h-10 text-verde-musgo-base" />
                  <h3 className="font-fancy text-3xl xl:text-5xl font-light text-verde-musgo-base">
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
                    { src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png", alt: "Amazon", href: "https://www.amazon.com.mx/wedding/share/Pamela-Santiago-Boda" },
                    { src: liverpoolSrc, alt: "Liverpool", href: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51662625" },
                    { src: banorteSrc, alt: "Transferencia", href: "#" }
                  ].map((item, index) => (
                    <motion.a 
                      key={item.alt}
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={{
                        initial: { opacity: 0, y: 50, scale: 0.8 },
                        animate: { opacity: 1, y: 0, scale: 1 }
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white rounded-2xl p-4 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300"
                    >
                      <img src={item.src} className="w-16 h-16 rounded-xl" alt={item.alt} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.section>
  )
}

export default Gifts