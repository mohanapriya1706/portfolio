import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../data';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ExperienceItem = ({ exp, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className={`experience-item flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 flex justify-center md:px-8 w-full">
                <div className={`p-6 glass rounded-2xl border-l-4 border-primary transition-all duration-300 w-full hover:shadow-xl ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <FaBriefcase size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">{exp.role}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-4">{exp.duration} | {exp.location}</p>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out`} style={{ maxHeight: isExpanded ? '1000px' : '0' }}>
                        <ul className="space-y-2 text-sm text-gray-400 mt-4 pt-4 border-t border-white/5">
                            {exp.points.map((point, k) => (
                                <li key={k} className="flex items-start">
                                    <span className="mr-2 text-primary mt-1">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 flex items-center space-x-2 text-primary text-sm font-bold hover:text-primary/80 transition-colors"
                    >
                        <span>{isExpanded ? 'Hide Experience' : 'Show Experience'}</span>
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dark rounded-full border-4 border-primary z-10 items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </div>
            <div className="md:w-1/2"></div>
        </div>
    );
};

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray('.experience-item');

        items.forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: index => index % 2 === 0 ? 50 : -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Click on a role to view detailed contributions and impact.</p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary/20 rounded-full"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <ExperienceItem key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
