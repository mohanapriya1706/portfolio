import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaEnvelope, FaCopy } from 'react-icons/fa';
import { bio } from '../data';
import { useState, useEffect } from 'react';

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Awards', href: '#awards' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gradient">Mohana.</a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="hidden lg:flex items-center space-x-4 bg-gray-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-primary/10 group transition-all hover:border-primary/30 mr-4">
                        <a href={`mailto:${bio.email}`} title="Email me" className="text-xs font-medium hover:text-primary transition-colors truncate max-w-[150px]">
                            {bio.email}
                        </a>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(bio.email);
                                const btn = document.getElementById('copy-btn-header');
                                btn.classList.add('text-green-500');
                                setTimeout(() => btn.classList.remove('text-green-500'), 2000);
                            }}
                            id="copy-btn-header"
                            className="text-primary hover:scale-110 transition-transform"
                        >
                            <FaCopy size={12} />
                        </button>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-slate-700 hover:bg-gray-200'}`}
                    >
                        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleTheme} className="p-2">
                        {isDark ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-slate-700" />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isDark ? 'text-white' : 'text-slate-900'}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`md:hidden absolute top-full left-0 w-full glass border-t border-white/10 p-6 flex flex-col space-y-4 shadow-xl`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                        <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Contact</p>
                        <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-800/50 px-4 py-3 rounded-xl border border-primary/10">
                            <a href={`mailto:${bio.email}`} className="text-sm font-medium truncate">
                                {bio.email}
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(bio.email);
                                }}
                                className="p-2 aspect-square bg-primary/10 text-primary rounded-lg"
                            >
                                <FaCopy size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
