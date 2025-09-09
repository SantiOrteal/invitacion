import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Heart } from "lucide-react";
import Hero from "./sections/hero";
import Countdown from "./sections/Countdown";
import Ceremony from "./sections/Ceremony";
import DressCode from "./sections/DressCode";
import Gallery from "./sections/Gallery";
import Hotels from "./sections/Hotels";
import Gifts from "./sections/Gifts";
import Rsvp from "./sections/Rsvp";
import Hashtag from "./sections/Hashtag";
import WeddingItinerary from "./sections/WeddingItinerary";


const WeddingDetail = ({ timeLeft, audioRef }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };



  return (
    <>
      {/* Background Audio */}
      {/* <audio ref={audioRef} loop>
        <source src="/wedding-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}

      {/* Sticky Mute Button */}
      <motion.button
        onClick={toggleMute}
        className="bg-white fixed top-6 right-6 z-50 bg-marfil-iluminad-2 backdrop-blur-sm border outline-none rounded-full p-3 
        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-verde-musgo-base" />
        ) : (
          <Volume2 className="w-5 h-5 text-verde-musgo-base" />
        )}
      </motion.button>

      <motion.div
        className="w-full h-full bg-gradient-to-b from-verde-musgo-base to-verde-musgo-ilumniado-1" 
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hero Cover Section */}
        <Hero />

        {/* Countdown Section */}
        <Countdown timeLeft={timeLeft} fadeInUp={fadeInUp} staggerChildren={staggerChildren} />

        {/* Ceremony Section */}
        {/* <Ceremony fadeInUp={fadeInUp} staggerChildren={staggerChildren}  /> */}
        <WeddingItinerary fadeInUp={fadeInUp} staggerChildren={staggerChildren}  />
      

        {/* Dress Code Section */}
        <DressCode fadeInUp={fadeInUp}  />

        {/* Gallery Section */}
        <Gallery fadeInUp={fadeInUp} staggerChildren={staggerChildren}  />

        {/* Hotels Section */}
        <Hotels fadeInUp={fadeInUp} />

        {/* Gift Registry Section */}
        <Gifts fadeInUp={fadeInUp} staggerChildren={staggerChildren}  />

        {/* RSVP Section */}
        <Rsvp fadeInUp={fadeInUp} />

        {/* Hashtag Section */}
        <Hashtag fadeInUp={fadeInUp} />

        {/* Footer with decorative elements */}
        <motion.footer 
          className="py-12 bg-gradient-to-t from-verde-musgo-base to-verde-musgo-iluminado-1 text-white text-center bg-textura"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center items-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-8 h-8 text-white/80" fill="currentColor" />
            <p className="font-fancy heading-4 text-xl font-light">
              Con amor, Pamela & Santiago
            </p>
            <Heart className="w-8 h-8 text-white/80" fill="currentColor" />
          </motion.div>
        </motion.footer>
      </motion.div>
    </>
  );
};

export default WeddingDetail;