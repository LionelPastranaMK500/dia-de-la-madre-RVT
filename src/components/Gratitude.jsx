import { motion } from 'framer-motion';

function Gratitude() {
    return (
        <section id="agradecimiento" className="py-16 px-4">
            <motion.h3
                className="text-4xl font-dancing font-bold text-center mb-12 text-secondary transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Gracias, Mamá
            </motion.h3>
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <p className="text-xl mb-6 font-poppins text-text transition-colors duration-500 ease-in-out hover:cursor-pointer">
                    Mamá, Gracias por todo lo que haces, por tus risas, tus consejos, y por amarme siempre. Este Día de la Madre es para ti.
                </p>
                <p className="text-xl font-poppins text-text transition-colors duration-500 ease-in-out hover:cursor-pointer">
                    ¡Te amo con todo mi corazón!
                </p>
            </motion.div>
        </section>
    );
}

export default Gratitude;