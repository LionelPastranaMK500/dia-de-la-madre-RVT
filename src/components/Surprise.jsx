import { useState } from 'react';
import { motion } from 'framer-motion';
import SurpriseImage from '../assets/surprise.jpg';

function Surprise() {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <section id="sorpresa" className="py-16 px-4">
            <motion.h3
                className="text-4xl font-dancing font-bold text-center mb-12 text-secondary transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                ¡Una Sorpresa para Roxana!
            </motion.h3>
            <div className="max-w-3xl mx-auto text-center">
                {!isRevealed ? (
                    <motion.button
                        onClick={() => setIsRevealed(true)}
                        className="bg-accent text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ¡Descubre tu Sorpresa!
                    </motion.button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <img
                            src={SurpriseImage}
                            alt="Tinker Bell Surprise"
                            className="h-64 md:h-96 max-w-full mx-auto mb-6 rounded-lg"
                        />
                        <p className="text-lg text-secondary">
                            ¡Roxana, eres la magia en nuestras vidas, Andriy Lionel . Espero que te guste mami.¡
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Surprise;