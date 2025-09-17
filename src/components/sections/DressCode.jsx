import { motion } from "framer-motion";
import DressCodeSvg from "../../assets/svg/dressCode";

// OPCIÓN 1: Layout en dos columnas
const DressCodeOption1 = ({ fadeInUp }) => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[600px]"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3 
          className="text-5xl font-light mb-12 text-white text-center"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Información del Evento
        </motion.h3>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Dress Code */}
          <motion.div
            className="bg-marfil-base backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-light mb-4 text-verde-musgo-base text-center" 
                style={{ fontFamily: "'Dancing Script', cursive" }}>
              Dress Code
            </h4>
            <DressCodeSvg className="w-32 h-32 mx-auto fill-verde-musgo-base mb-4" />
            <p className="font-body text-verde-musgo-base text-sm text-center font-semibold">
              Vestimenta elegante: traje para caballeros y vestido largo para damas.
            </p>
          </motion.div>

          {/* No Niños */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-light mb-6 text-white text-center"
                style={{ fontFamily: "'Dancing Script', cursive" }}>
              Evento Exclusivo
            </h4>
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-marfil-base text-lg font-semibold mb-2">
                Solo Adultos
              </p>
              <p className="text-white/80 text-sm">
                Apreciamos que este evento sea únicamente para adultos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// OPCIÓN 2: Layout vertical con tarjetas separadas
const DressCodeOption2 = ({ fadeInUp }) => {
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
          transition={{ duration: 1, delay: 0.5 }}
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
          transition={{ duration: 0.8, delay: 0.7 }}
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

// OPCIÓN 3: Layout con sidebar
const DressCodeOption3 = ({ fadeInUp }) => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[600px]"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar - No Niños */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-5xl mb-4">⚠️</div>
                <h4 className="text-2xl font-light mb-3 text-white"
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Importante
                </h4>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white font-semibold text-lg mb-2">Solo Adultos</p>
                  <p className="text-white/80 text-sm">
                    Este evento no incluye niños
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content - Dress Code */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-6xl font-light mb-8 text-white text-center"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Dress Code
            </motion.h3>
            
            <div className="bg-marfil-base backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <DressCodeSvg className="w-56 h-56 fill-verde-musgo-base" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-3xl font-semibold text-verde-musgo-base mb-4">
                    Elegancia Requerida
                  </h4>
                  <p className="font-body text-verde-musgo-base text-xl leading-relaxed">
                    <strong>Caballeros:</strong> Traje completo<br/>
                    <strong>Damas:</strong> Vestido largo elegante
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// OPCIÓN 4: Layout minimalista con iconos
const DressCodeOption4 = ({ fadeInUp }) => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-t from-verde-musgo-oscuro-2 to-verde-musgo-base bg-textura min-h-[600px]"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-6xl font-light text-white mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}>
            Detalles del Evento
          </h3>
          <div className="w-32 h-1 bg-white/30 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Dress Code */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-marfil-base rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="mb-6">
                <DressCodeSvg className="w-32 h-32 mx-auto fill-verde-musgo-base" />
              </div>
              <h4 className="text-4xl font-light mb-6 text-verde-musgo-base"
                  style={{ fontFamily: "'Dancing Script', cursive" }}>
                Dress Code
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-verde-musgo-base">
                  <span className="text-2xl">🤵</span>
                  <span className="font-semibold">Traje para caballeros</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-verde-musgo-base">
                  <span className="text-2xl">👗</span>
                  <span className="font-semibold">Vestido largo para damas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adults Only */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-6xl">🔞</span>
                </div>
              </div>
              <h4 className="text-4xl font-light mb-6 text-white"
                  style={{ fontFamily: "'Dancing Script', cursive" }}>
                Solo Adultos
              </h4>
              <div className="space-y-4">
                <p className="text-marfil-base text-lg font-medium">
                  Evento exclusivo para adultos
                </p>
                <div className="inline-block bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2">
                  <span className="text-red-200 font-semibold text-sm">NO NIÑOS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// Exporta la opción que prefieras
export default DressCodeOption2;