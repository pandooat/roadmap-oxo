"use client";

import React, { useState, useEffect } from 'react';
import {
    Instagram,
    Twitter,
    MessageCircle,
    Send,
    Gamepad2,
    ArrowRight,
    Menu,
    X,
    Globe
} from 'lucide-react';

const CommunityPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socialLinks = [
        {
            name: "Instagram",
            icon: <Instagram size={32} />,
            desc: "Daily Updates & Highlights",
            color: "from-pink-500 via-red-500 to-yellow-500",
            link: "#",
            stat: "12K+ Followers"
        },
        {
            name: "X (Twitter)",
            icon: <Twitter size={32} />, // Or use custom X SVG
            desc: "Real-time News & Alpha",
            color: "from-gray-700 to-black",
            link: "#",
            stat: "5K+ Followers"
        },
        {
            name: "Telegram",
            icon: <Send size={32} />, // Placeholder for Telegram
            desc: "Community Chat & Signals",
            color: "from-blue-400 to-blue-600",
            link: "#",
            stat: "8K+ Members"
        },
        {
            name: "WhatsApp",
            icon: <MessageCircle size={32} />,
            desc: "Official Announcements",
            color: "from-green-400 to-green-600",
            link: "https://chat.whatsapp.com/FzJCFZ3qmpI1yBAQQNBcbq",
            stat: "Active Group"
        },
        {
            name: "Discord",
            icon: <Gamepad2 size={32} />,
            desc: "Deep Dives & Governance",
            color: "from-indigo-400 to-indigo-600",
            link: "#",
            stat: "Coming Soon"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0B1120] text-white font-sans selection:bg-[#7C3AED] selection:text-white overflow-x-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#2563EB] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-700"></div>
            </div>

            {/* Navbar (Simplified version for consistency) */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">OXO</span>
                            <span className="ml-2 text-sm font-medium tracking-widest text-[#E0F2FE]/70">DEX TRADING</span>
                        </a>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Home</a>
                            <a href="#" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Fitur</a>
                            <a href="#" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Roadmap</a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-[#0B1120] border-b border-white/10 absolute w-full">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="/" className="block px-3 py-2 text-base font-medium text-[#E0F2FE] hover:bg-white/5 rounded-md">Home</a>
                        </div>
                    </div>
                )}
            </nav>

            <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 backdrop-blur-sm mb-6">
                        <Globe className="w-4 h-4 mr-2 text-[#22D3EE]" />
                        <span className="text-sm font-medium text-[#E0F2FE]">Global Network</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Movement</span>
                    </h1>
                    <p className="text-xl text-[#E0F2FE]/70 max-w-2xl mx-auto">
                        Jangan cuma trading sendirian. Gabung ribuan trader lain, dapet alpha signal, dan diskusi bareng di platform favoritmu.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 rounded-2xl bg-[#1E293B]/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {social.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                                    <p className="text-[#E0F2FE]/60 mb-4">{social.desc}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                    <span className="text-sm font-mono text-[#22D3EE]">{social.stat}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
