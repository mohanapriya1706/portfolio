import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { bio } from '../data';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.fromTo('.hero-text',
            { opacity: 0, y: 50, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15 }
        );

        tl.fromTo('.hero-cta',
            { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8 },
            "-=0.6"
        );

        // Floating animation for background blobs
        gsap.to('.hero-blob', {
            y: 'random(-20, 20)',
            x: 'random(-20, 20)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
                each: 0.5,
                from: 'random'
            }
        });
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse hero-blob"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700 hero-blob"></div>

            <div id="about" className="container mx-auto px-6 text-center z-10" ref={heroRef}>
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-primary/20 text-primary text-sm font-semibold hero-text">
                    Available for Opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 hero-text">
                    Hi, I'm <span className="text-gradient">{bio.name}</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-6 hero-text">
                    {bio.summary}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-10 hero-text">
                    {bio.topSkills && bio.topSkills.map((skill, i) => (
                        <div key={i} className="px-4 py-2 glass rounded-xl text-primary text-sm font-bold border border-primary/10 hover:border-primary/40 transition-colors">
                            {skill}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center mb-10 hero-cta">
                    <div className="flex items-center space-x-3 bg-gray-100 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-primary/10 mb-6 group transition-all hover:border-primary/30">
                        <a href={`mailto:${bio.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                            {bio.email}
                        </a>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(bio.email);
                                const btn = document.getElementById('copy-btn-hero');
                                const originalText = btn.innerHTML;
                                btn.innerHTML = 'Copied!';
                                btn.classList.add('text-green-500');
                                setTimeout(() => {
                                    btn.innerHTML = originalText;
                                    btn.classList.remove('text-green-500');
                                }, 2000);
                            }}
                            id="copy-btn-hero"
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20 transition-all font-bold"
                        >
                            Copy
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex items-center space-x-4">
                            <a href={bio.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href={bio.links.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href={bio.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-secondary transition-colors">
                                <SiLeetcode size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
