import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion  } from "framer-motion";
import { Dot } from "lucide-react";
import EnvelopeAnimation from "./animation/EnvelopeAnimation";
import WeedingDetail from "./weddingDetail";
import SvgAnimation from "./animation/svgAnimation";
import caballitoMarMusic from "../assets/music/Caballito de mar - Rodrigo Rojas & Lazcano Malo.mp3";
import music from "../assets/music/mi-corazon-encantado.mp3";
import Bubbles from "./animation/Bubbles";


const targetDate = new Date("2025-11-22T18:00:00");

// 2. Add reduced motion support for accessibility and performance
// const shouldReduceMotion = useReducedMotion();

export default function WeddingInvitation() {
  const audioRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showInvitation, setShowInvitation] = useState(false);
  const [startAudio, setStartAudio] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);
  const [showWeddingDetail, setShowWeddingDetail] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && startAudio) {
      audio.volume = 0.3;
      audio.play().catch(() => {console.log("Audio autoplay prevented")});
    }
  }, [startAudio]);

    const handleOpenEnvelope = () => {
    setStartAudio(true);
    setShowBubbles(true);
    
    // Después de 7 segundos, ocultar las burbujas y mostrar el WeddingDetail
    setTimeout(() => {
      setShowInvitation(true);
      setShowBubbles(false);
      setShowWeddingDetail(true);
    }, 10000); // 7 segundos
  };

  return (
    <div className="relative h-screen w-full bg-verde-musgo-oscuro-2 bg-textura overflow-x-hidden">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* !showInvitation */}
        {!showInvitation && (
          <AnimatePresence  mode="wait">
          <motion.div
            className="title no-drag min-h-[620px] absolute m-auto w-8/9 h-8/9 sm:m-auto inset-0 flex flex-col justify-center items-center text-center px-4 bg-marfil-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mt-6 sm:mt-20 mb-1 xs:mb-10 sm:mb-15 w-4/5">
              <motion.div 
                className="w-full h-[2px] bg-ocre-oscuro-base mb-10 sm:mb-15"
                initial={{ y: 0, scaleX: 0 }}
                animate={{ y: 0, scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
              />
              <motion.h1 
                className="heading-1 font-cursive mb-5 sm:mb-15 text-color-dark flex flex-col items-center"
                initial={{ y: -30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
              >
                <span>Pamela</span>
                <span>&</span>
                <span>Santiago</span>
              </motion.h1>

              <motion.div 
                className="w-full h-[2px] bg-ocre-oscuro-base mb-5 sm:mb-10"
                initial={{ y: 0, scaleX: 0 }}
                animate={{ y: 0, scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
              />

              <motion.p 
                className="font-body text-xl md:text-2xl xl:text-3xl mb-2 text-color-primary"
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3 }}
              >
                <span className="flex justify-center items-center" >
                  22 <Dot /> 11 <Dot /> 2025
                </span>
              </motion.p>

            </div>

            {/* envelope animation */}
            <motion.div
              className="mt-3 xs:mt-8"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <EnvelopeAnimation onOpen={handleOpenEnvelope} />
            </motion.div>

            {/* Text Animation */}
            {
              !showInvitation &&
              <>
                <p className="font-cursive mt-4 xs:mt-6 text-ocre-oscuro-base font-semibold text-3xl flex flex-col items-center">Toca el Sobre</p> 
                <SvgAnimation />
              </>
            }

          </motion.div>
          </AnimatePresence>
        )}
      
      {/* Bubbles transition animation */}
      {showBubbles && (
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Bubbles />
          </motion.div>
        </AnimatePresence>
      )}

      
        {showInvitation  && (
          <AnimatePresence  mode="wait">
          <WeedingDetail timeLeft={timeLeft} audioRef={audioRef} />
          </AnimatePresence>
        )}
      
    </div>
  );
}