import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/useThemeStore';
import logo from '../assets/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useThemeStore();

    const toggleMenu = () => setIsOpen(!isOpen);

    const linkVariants = {
        hover: { scale: 1.1, color: theme === 'light' ? '#fef08a' : '#f472b6', transition: { duration: 0.3 } }
    };

    return (
        <header className="sticky top-0 z-20 bg-white/10 backdrop-blur-md p-6">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <motion.img
                    src={logo}
                    alt="Tinker Bell Logo"
                    className="h-12 w-auto"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex gap-8">
                        {['inicio', 'recuerdos', 'agradecimiento', 'sorpresa'].map((section) => (
                            <motion.div key={section} variants={linkVariants} whileHover="hover">
                                <ScrollLink
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    className="text-secondary hover:text-accent cursor-pointer transition"
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </ScrollLink>
                            </motion.div>
                        ))}
                    </nav>
                    <motion.button
                        onClick={toggleTheme}
                        className="bg-accent text-black p-2 rounded-full shadow-lg hover:bg-yellow-600 transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </motion.button>
                    <button className="md:hidden text-3xl" onClick={toggleMenu}>☰</button>
                </div>
            </div>
            {isOpen && (
                <motion.nav
                    className="md:hidden bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full h-[calc(100vh-4rem)] flex flex-col items-center pt-8 space-y-8"
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <button className="absolute top-4 right-6 text-3xl text-secondary" onClick={toggleMenu}>✕</button>
                    {['inicio', 'recuerdos', 'agradecimiento', 'sorpresa'].map((section) => (
                        <motion.div
                            key={section}
                            variants={linkVariants}
                            whileHover="hover"
                            onClick={toggleMenu}
                        >
                            <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                className="text-2xl text-secondary hover:text-accent transition cursor-pointer"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        </motion.div>
                    ))}
                    <motion.button
                        onClick={() => { toggleTheme(); toggleMenu(); }}
                        className="text-2xl text-secondary hover:text-accent transition cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
                    </motion.button>
                </motion.nav>
            )}
        </header>
    );
}

export default Navbar;