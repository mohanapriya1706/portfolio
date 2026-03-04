import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaEllipsisH } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { gsap } from 'gsap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState('');
    const chatRef = useRef(null);
    const messagesEndRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        // Generate a new session ID on reload
        const newId = `session_${Math.random().toString(36).substr(2, 9)}`;
        setSessionId(newId);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(chatRef.current,
                { opacity: 0, scale: 0.8, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
            );
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = { role: 'user', content: message };
        setChatHistory(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('https://portfolio-backend-655927503155.europe-west1.run.app/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session_id: sessionId,
                    message: message
                })
            });

            const data = await response.json();
            const botMessage = { role: 'assistant', content: data.response || "I couldn't process that. Try again!" };
            setChatHistory(prev => [...prev, botMessage]);
        } catch (error) {
            setChatHistory(prev => [...prev, { role: 'assistant', content: "Error connecting to service." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative ${isOpen ? 'bg-secondary text-white' : 'bg-emerald-500 text-white'
                    }`}
            >
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25"></span>
                )}
                {isOpen ? <FaTimes size={28} /> : <FaComments size={28} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    ref={chatRef}
                    className={`absolute bottom-20 right-0 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] rounded-3xl shadow-2xl overflow-hidden flex flex-col glass border border-white/10`}
                >
                    {/* Header */}
                    <div className="p-6 bg-primary text-white flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <FaComments size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold">Mona's AI Assistant</h4>
                                <p className="text-xs text-white/70">Online | Ask me anything(not about personal) about Mohana</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {chatHistory.length === 0 && (
                            <div className="text-center py-10">
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Hi! I'm Mona, your AI assistant. How can I help you today?
                                </p>
                            </div>
                        )}
                        {chatHistory.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-br-none shadow-md'
                                    : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5 shadow-sm'
                                    }`}>
                                    {msg.role === 'assistant' ? (
                                        <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10 prose-ul:list-disc prose-ol:list-decimal">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {msg.content}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none border border-white/5">
                                    <FaEllipsisH className="animate-bounce text-gray-400" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-6 border-t border-white/5 bg-white/5">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                className={`w-full p-3 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm ${isDark ? 'bg-slate-900 border-white/5 text-white' : 'bg-gray-100 border-gray-200 text-slate-900'
                                    }`}
                            />
                            <button
                                type="submit"
                                className={`absolute right-2 p-2 text-primary hover:text-primary/80 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                <FaPaperPlane size={20} className="rotate-90" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
