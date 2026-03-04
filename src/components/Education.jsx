import React from 'react';
import { education } from '../data';
import { FaGraduationCap, FaCalendar, FaCheckCircle } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Foundational knowledge and specialized studies in Data and Mathematics.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, i) => (
                        <div key={i} className="p-8 glass rounded-2xl border-l-4 border-secondary hover:translate-x-2 transition-transform shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                        <FaGraduationCap size={32} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl">{edu.degree}</h3>
                                        <p className="text-secondary font-medium">{edu.institution}</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-400 space-x-2 bg-slate-800/50 px-4 py-2 rounded-full text-sm">
                                    <FaCalendar />
                                    <span>{edu.duration}</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-white/5">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500 text-sm">Result:</span>
                                    <span className="font-bold text-primary">{edu.grade}</span>
                                </div>
                                {edu.details && (
                                    <div className="flex items-center space-x-2">
                                        <FaCheckCircle className="text-yellow-500" />
                                        <span className="font-bold text-yellow-500">{edu.details}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
