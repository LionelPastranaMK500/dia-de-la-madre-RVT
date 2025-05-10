import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function Hero() {
    return (
        <section id="inicio" className="text-center pt-24 pb-16 px-4">
            <motion.img
                src={logo}
                alt="Tinker Bell Logo"
                className="h-16 w-auto mx-auto mb-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.h2
                className="text-5xl md:text-6xl font-dancing font-bold mb-6 leading-tight text-secondary transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                ¡Feliz Día de la Madre, Roxana!
            </motion.h2>
            <motion.p
                className="text-xl max-w-3xl mx-auto mb-8 font-poppins text-text transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
                Este regalito es para ti, porque eres la mejor mamá del mundo. ¡Te quiero un montón!
            </motion.p>
        </section>
    );
}

export default Hero;