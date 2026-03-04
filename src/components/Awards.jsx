import React from 'react';
import { awards, certifications } from '../data';
import { FaExternalLinkAlt, FaCheckCircle, FaTrophy } from 'react-icons/fa';

const Awards = () => {
    return (
        <section id="awards" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Recognitions & <span className="text-gradient">Certifications</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Milestones and official validations of my technical expertise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Awards */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center mb-6">
                            <FaTrophy className="mr-3 text-yellow-500" /> Awards
                        </h3>
                        <div className="space-y-4">
                            {awards.map((award, i) => (
                                <div key={i} className="p-6 glass rounded-2xl hover:scale-[1.02] transition-transform group border-l-4 border-yellow-500">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{award.title}</h4>
                                            <p className="text-sm text-gray-400">{award.organization}</p>
                                        </div>
                                        <a href={award.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-primary">
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center mb-6">
                            <FaCheckCircle className="mr-3 text-primary" /> Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, i) => (
                                <div key={i} className="p-6 glass rounded-2xl hover:scale-[1.02] transition-transform group border-l-4 border-primary">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.title}</h4>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-primary shrink-0 ml-4">
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
