import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-dark bg-white dark:text-gray-100 text-gray-900 selection:bg-primary/30">
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
