import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gallery from "../utils/gallery";

const Gallery = ({ fadeInUp, staggerChildren }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Memoized variants to prevent recreation on each render
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleImageClick = (img, index) => {
    setSelectedImage({ ...img, index });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <motion.section 
        className="py-16 bg-white"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center px-4">
          <motion.h3 
            className="font-fancy text-3xl xl:text-5xl font-light mb-12 text-gray-700"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Galería
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {gallery.map((img, index) => (
              <motion.div
                key={`gallery-${index}`}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleImageClick(img, index)}
              >
                <img 
                  src={img.src} 
                  className={`w-full h-64 object-cover will-change-transform ${img.postion? img.postion : ''}`} 
                  alt={img.alt}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative z-10 2xl:max-w-7xl max-w-4xl max-h-[90vh] w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 z-20 text-white hover:text-verde-musgo-base transition-colors duration-200" 
                aria-label="Cerrar"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`w-full h-auto max-h-[80vh] object-cover ${selectedImage.postion? selectedImage.postion : ''}`}
                />
                {/* {selectedImage.alt && (
                  <div className="p-4 bg-white/20 backdrop-blur-sm">
                    <p className="text-gray-700 text-center font-medium ">
                      {selectedImage.alt}
                    </p>
                  </div>
                )} */}
              </div>

              {/* Navigation buttons (if you want to add next/prev functionality) */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const prevIndex = selectedImage.index > 0 
                        ? selectedImage.index - 1 
                        : gallery.length - 1;
                      setSelectedImage({ ...gallery[prevIndex], index: prevIndex });
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextIndex = selectedImage.index < gallery.length - 1 
                        ? selectedImage.index + 1 
                        : 0;
                      setSelectedImage({ ...gallery[nextIndex], index: nextIndex });
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="Siguiente imagen"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;