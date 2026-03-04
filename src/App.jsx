import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to('.scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-dark bg-white dark:text-gray-100 text-gray-900 selection:bg-primary/30">
        <div className="scroll-progress fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary z-[1000] origin-left scale-x-0"></div>
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Education />
          <Awards />
        </main>
        <Chatbot />

        <footer className="py-10 border-t border-white/5 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mohana Narayanan. Built with React + GSAP.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
