import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data';
import {
    FaBrain,
    FaCloud,
    FaTools,
    FaCogs,
    FaLayerGroup,
    FaTerminal
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useEffect(() => {
        gsap.fromTo('.skill-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    const skillCategories = [
        {
            title: 'Programming',
            list: skills.programming,
            icon: <FaTerminal size={24} />,
            color: 'text-green-500'
        },
        {
            title: 'ML & AI',
            list: skills.ml_ai,
            icon: <FaBrain size={24} />,
            color: 'text-primary'
        },
        {
            title: 'MLOps',
            list: skills.mlops,
            icon: <FaCogs size={24} />,
            color: 'text-yellow-500'
        },
        {
            title: 'Google Cloud Platform',
            list: skills.gcp,
            icon: <FaCloud size={24} />,
            color: 'text-secondary'
        },
        {
            title: 'Infrastructure',
            list: skills.cloud,
            icon: <FaTools size={24} />,
            color: 'text-orange-500'
        },
        {
            title: 'Frameworks',
            list: skills.frameworks,
            icon: <FaLayerGroup size={24} />,
            color: 'text-purple-500'
        },
    ];

    return (
        <section id="skills" className="py-20 relative overflow-visible">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Proficiency</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Specialized tools and technologies I use to build intelligent systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="skill-card p-6 glass rounded-2xl border border-white/5 hover:border-primary/50 transition-all group">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className={`p-3 rounded-xl bg-gray-100 dark:bg-slate-800 ${cat.color} transition-transform group-hover:scale-110`}>
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-lg">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.list.map((skill, k) => (
                                    <span key={k} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-sm rounded-full text-gray-400 group-hover:text-primary transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
