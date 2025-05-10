import { motion } from 'framer-motion';
import { useThemeStore } from '../store/useThemeStore';
function Memories() {
    const { theme } = useThemeStore();
    const memories = [
        {
            title: 'Compartiendome tus gustos',
            description: 'Simore enseñamdome buenas peliculas, musica, enseñandome un camino de bien como debe de ser.',
        },
        {
            title: 'Pasar el dia con risas e interacciones',
            description: 'Pasabamos los dias juntos riendo y sabiendo que mi mami estaria para mi cuando este solo.',
        },
        {
            title: 'Aprender contigo',
            description: '!Aprender muchas cosas de ti en mi infancia fue lo mejor me enseñaste mucho!',
        },
    ];

    const cardVariants = {
        hover: {
            scale: 1.05,
            boxShadow: theme === 'light' ? '0 8px 20px rgba(0, 0, 0, 0.1)' : '0 8px 20px rgba(255, 255, 255, 0.1)',
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="recuerdos" className="py-16 px-4 bg-white/5">
            <motion.h3
                className="text-4xl font-dancing font-bold text-center mb-12 text-secondary transition-colors duration-500 ease-in-out hover:cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Momentos Contigo, Roxana
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/10 p-6 rounded-xl shadow-lg"
                        variants={cardVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }}
                    >
                        <h4 className="text-2xl font-semibold mb-3 font-dancing text-accent transition-colors duration-500 ease-in-out hover:cursor-pointer">{memory.title}</h4>
                        <p className="font-poppins text-text transition-colors duration-500 ease-in-out hover:cursor-pointer">{memory.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Memories;