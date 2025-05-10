import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer className="bg-white/10 backdrop-blur-md py-8 text-center">
            <motion.p
                className="text-lg font-poppins text-text transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Hecho con ❤️ para Roxana por Andriy Lionel, Día de la Madre 2025
            </motion.p>
        </footer>
    );
}

export default Footer;