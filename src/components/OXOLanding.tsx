"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Target,
  Brain,
  ChevronDown,
  ArrowLeftRight,
  Lock,
  CheckSquare,
  Loader2,
  MessageCircle,
  Settings
} from 'lucide-react';

const OXOLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll for Navbar Glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAssessment = () => {
    const element = document.getElementById('assessment-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white font-sans selection:bg-[#7C3AED] selection:text-white overflow-x-hidden">

      {/* Background Decor Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">OXO</span>
              <span className="ml-2 text-sm font-medium tracking-widest text-[#E0F2FE]/70">DEX TRADING</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Fitur</a>
              <a href="#" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Roadmap</a>
              <a href="#" className="text-[#E0F2FE] hover:text-white transition-colors text-sm font-medium">Komunitas</a>
              <button
                onClick={scrollToAssessment}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Cek Portofolio
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1120] border-b border-white/10 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-[#E0F2FE] hover:bg-white/5 rounded-md">Fitur</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-[#E0F2FE] hover:bg-white/5 rounded-md">Roadmap</a>
              <button onClick={scrollToAssessment} className="w-full text-left mt-4 block px-3 py-3 text-base font-bold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-md text-white">
                Cek Portofolio
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-[#22D3EE] mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-[#E0F2FE]">✨ Web3 Growth Check-Up by OXO</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white">Dari Newbie Jadi Whale,</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE]">Lebih Terarah.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[#E0F2FE]/80 leading-relaxed">
          Capek main crypto cuma ikut-ikutan FOMO terus boncos? Isi 3-menit assessment ini, tim OXO bakal kirim roadmap personal biar kamu upgrade dari "coba-coba" jadi pemain Web3 yang punya kompas jelas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={scrollToAssessment}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-lg shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            Dapatkan Roadmap Web3-ku
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#E0F2FE]/60">
          <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-[#22D3EE]" /> Gratis</span>
          <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-[#22D3EE]" /> Tanpa Deposit</span>
          <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-[#22D3EE]" /> Cuma 3 Menit</span>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="relative z-10 py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Masih Sering "Rekt" karena Ikut-ikutan?</h2>
            <p className="text-[#E0F2FE]/70 max-w-2xl mx-auto">
              Banyak teman-teman di komunitas crypto Indonesia masuk market tanpa kompas. Assessment OXO ini bikin kamu stop jadi "Degen" sembarangan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="p-8 rounded-2xl bg-[#1E293B]/40 backdrop-blur-sm border border-red-500/20 relative overflow-hidden group hover:border-red-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-red-500/10 mr-3"><TrendingUp className="w-5 h-5 transform rotate-180" /></span>
                Tantangan Kamu Sekarang
              </h3>
              <ul className="space-y-4">
                {[
                  "Sering kena Rekt/Loss karena FOMO",
                  "Bingung baca chart & ketinggalan narasi",
                  "Gas fee mahal & transaksi suka gagal",
                  "Merasa sendirian, nggak ada insight"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#E0F2FE]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1E293B]/60 to-[#2563EB]/10 backdrop-blur-md border border-[#22D3EE]/30 relative overflow-hidden shadow-lg hover:shadow-[#2563EB]/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold text-[#22D3EE] mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-[#22D3EE]/10 mr-3"><Target className="w-5 h-5" /></span>
                Gimana OXO Bantu
              </h3>
              <ul className="space-y-4">
                {[
                  "Roadmap mapping profil risiko & kontrol emosi",
                  "Filter fokus: Fundamental, Teknikal, atau Makro",
                  "Akses ekosistem OXO: Swap cepat & biaya efisien",
                  "Community & resources belajar sesuai levelmu"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-white">
                    <CheckCircle className="w-5 h-5 text-[#22D3EE] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToAssessment} className="px-8 py-3 rounded-xl border border-[#2563EB] text-[#E0F2FE] hover:bg-[#2563EB] hover:text-white transition-all duration-300 font-medium">
              Yuk, Mulai Cek Portofolio
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-[#0B1120] to-[#1E3A8A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Setelah Isi Form, Kamu Bakal Dapet Apa?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#22D3EE]" />,
                title: "Profil Web3 Snapshot",
                desc: "Ringkasan kondisi awalmu: pengalaman, peran, dan tantangan utama."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-[#7C3AED]" />,
                title: "Roadmap 3 Bulan",
                desc: "Rekomendasi langkah praktis: fokus fundamental, trading, atau migrasi platform."
              },
              {
                icon: <Zap className="w-6 h-6 text-[#2563EB]" />,
                title: "Rekomendasi Tools",
                desc: "Saran platform (CEX/DEX) yang cocok sama gaya main kamu."
              },
              {
                icon: <Brain className="w-6 h-6 text-[#22D3EE]" />,
                title: "Akses Edukasi",
                desc: "Referensi materi belajar dan komunitas yang paling relevan."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#1E293B]/40 border border-[#2563EB]/20 hover:border-[#7C3AED]/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#0B1120] flex items-center justify-center mb-4 shadow-inner">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#E0F2FE]/70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#E0F2FE]/40 mt-8">
            Disclaimer: Semua rekomendasi edukatif, bukan ajakan beli aset tertentu. DYOR.
          </p>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Cocok Buat Kamu yang...</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "🌱 Newbie", desc: "Pengen mulai crypto dengan fondasi bener, nggak mau belajar sendirian." },
              { role: "🚀 Explorer", desc: "Udah lama main tapi stuck, pengen lipatgandakan portofolio lebih rapi." },
              { role: "👑 Veteran / OG", desc: "Cari exposure ke ekosistem DEX yang lebih efisien dan transparan." },
              { role: "📈 Trader / Degen", desc: "Pengen kurangi FOMO, ningkatin win rate secara konsisten." },
              { role: "💎 Holder", desc: "Fokus jangka panjang, pengen maksimalkan yield & efisiensi biaya." },
              { role: "🎁 Airdrop Hunter", desc: "Pengen optimasi gas, waktu, dan peluang kampanye on-chain." }
            ].map((persona, idx) => (
              <div key={idx} className="flex items-start p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[#E0F2FE]">{persona.role}</h4>
                  <p className="text-sm text-[#E0F2FE]/60 mt-1">{persona.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About OXO */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mengapa OXO Penting di Roadmap Web3-mu?</h2>
              <p className="text-lg text-[#E0F2FE]/80 mb-8 leading-relaxed">
                OXO DEX Trading dibikin buat bantu pengguna Web3 swap dan aktivitas on-chain dengan cara lebih cepat, transparan, dan irit biaya. Jadi kamu nggak "bocor" terus di gas fee.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Cepat & Efisien", desc: "Swap dan eksekusi tanpa nunggu lama, biaya kompetitif." },
                  { title: "Transparan & Non-Custodial", desc: "Kamu tetap pegang kendali atas aset sendiri." },
                  { title: "Dibuat untuk Komunitas", desc: "Fitur dibangun dari feedback pengguna nyata." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] border border-[#7C3AED]/30">
                      {idx === 0 ? <Zap size={18} /> : idx === 1 ? <Shield size={18} /> : <Users size={18} />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                      <p className="text-[#E0F2FE]/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] blur-3xl opacity-20 transform rotate-6 rounded-3xl"></div>
              {/* Updated DEX UI based on requested image */}
              <div className="relative rounded-3xl bg-[#0F1623] border border-white/10 p-6 shadow-2xl max-w-md mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Swap</h3>
                  <div className="p-2 rounded-full bg-[#1E293B] text-gray-400 hover:text-white cursor-pointer border border-white/5">
                    <Settings size={20} />
                  </div>
                </div>

                {/* Token Selection Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {/* From Token */}
                  <div className="flex-1 bg-[#1E293B] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#2563EB]/50 transition-all group">
                    <div className="text-xs text-gray-400 mb-2">From</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">X</div>
                        <div>
                          <div className="font-bold flex items-center gap-1 text-white">IDRX <ChevronDown size={14} className="text-gray-400 group-hover:text-white" /></div>
                          <div className="text-[10px] text-gray-500">1 IDRX ≈ 1 IDR</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Swap Icon */}
                  <div className="p-2 bg-[#1E293B] rounded-lg border border-white/5 text-gray-400 hover:text-white cursor-pointer hover:bg-[#2563EB]/20 transition-all">
                    <ArrowLeftRight size={16} />
                  </div>

                  {/* To Token */}
                  <div className="flex-1 bg-[#1E293B] p-3 rounded-xl border border-white/5 cursor-pointer hover:border-[#2563EB]/50 transition-all group">
                    <div className="text-xs text-gray-400 mb-2">To</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-xs text-white">T</div>
                        <div>
                          <div className="font-bold flex items-center gap-1 text-white">USDT <ChevronDown size={14} className="text-gray-400 group-hover:text-white" /></div>
                          <div className="text-[10px] text-yellow-500 font-medium">On BSC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Send Amount */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-300 mb-2">Send</div>
                  <div className="bg-[#0B1120] p-4 rounded-xl border border-white/5 flex items-center gap-3 focus-within:border-[#2563EB]/50 transition-all">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white flex-shrink-0">X</div>
                    <input
                      type="text"
                      defaultValue="1.000.000"
                      className="bg-transparent text-xl font-bold text-white focus:outline-none w-full"
                    />
                  </div>
                </div>

                {/* Destination Address */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-300 mb-2">Destination Address</div>
                  <div className="bg-[#0B1120] p-4 rounded-xl border border-white/5 focus-within:border-[#2563EB]/50 transition-all">
                    <input
                      type="text"
                      placeholder="Input wallet address"
                      className="bg-transparent text-sm text-gray-300 focus:outline-none w-full placeholder-gray-600"
                    />
                  </div>
                </div>

                {/* Quote Info */}
                <div className="bg-[#1E293B]/50 p-4 rounded-xl border border-white/5 mb-6 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Minimum Received</span>
                    <span className="font-bold text-white">58.847814 USDT</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Quote valid for</span>
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="font-mono">60s</span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                        Celer cBridge
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://oxo.so/trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                >
                  <Lock size={18} />
                  Connect Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment-form" className="py-24 relative overflow-hidden">
        {/* Abstract Background for Form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0B1120] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <AssessmentForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0B1120] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Yang Sering Ditanyain</h2>
          <div className="space-y-4">
            {[
              { q: "Berbayar nggak sih?", a: "Nope, gratis kok. Assessment dan roadmap dasar ini kami bantu buat bantu kamu paham posisi di Web3 sebelum ambil langkah lebih jauh." },
              { q: "Wajib pakai OXO setelah isi form?", a: "Nggak wajib sama sekali. Di roadmap kami bakal jelasin di mana OXO bisa relevan buat kamu, tapi keputusan tetap di tanganmu." },
              { q: "Lama nunggu hasilnya?", a: "Biasanya 24–48 jam kerja, roadmap bakal landing di email yang kamu daftarin." },
              { q: "Ini saran investasi?", a: "Bukan ya. Semua info edukatif, bukan rekomendasi finansial. Selalu DYOR sebelum investasi atau trading." }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">OXO</span>
            <p className="text-sm text-gray-500 mt-2">© 2026 OXO DEX Trading. Built for Web3 Indonesia.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter/X</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

// Interactive Form Component
const AssessmentForm = () => {
  // CONFIGURATION: UPDATED URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_F3ub7Ulpu9RE96nBr5NFeyNf7O3I-Bsn8vMoqDAdYIJr0-reNchobvWl_EHsHBXg/exec";

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    experience: '',
    role: '',
    goal: '',
    keyTakeaways: '',
    webinarFeedback: '',
    source: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, source: [...prev.source, value] };
      } else {
        return { ...prev, source: prev.source.filter(item => item !== value) };
      }
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          source: formData.source.join(', '),
          submittedAt: new Date().toISOString()
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.warn("Server response not OK, but data might be saved.");
        setIsSubmitted(true); // Optimistic UI update
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ada gangguan koneksi. Coba lagi ya!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const handleWhatsAppRedirect = () => {
      const textToCopy = "Saya sudah mengisi Form untuk Roadmap saya, Terima Kasih";

      // Fallback: Create a textarea to copy from
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Make it invisible
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";

      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        console.log('Text copied via execCommand');
      } catch (err) {
        console.error('Failed to copy via execCommand', err);
      }

      document.body.removeChild(textArea);

      // Redirect to WhatsApp Group URL
      window.open("https://chat.whatsapp.com/FzJCFZ3qmpI1yBAQQNBcbq", "_blank");
    };

    return (
      <div className="bg-[#1E293B]/60 backdrop-blur-md border border-[#22D3EE]/30 rounded-2xl p-10 text-center animate-fade-in-up shadow-2xl">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Roadmap OTW! 🚀</h3>
        <p className="text-[#E0F2FE]/80 mb-6">
          Thanks {formData.name}, tim OXO lagi racik strategi buat kamu. Cek email <strong>{formData.email}</strong> dalam 24-48 jam ya.
        </p>

        <button
          onClick={handleWhatsAppRedirect}
          className="w-full px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2 mb-4 group"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Gabung Grup WA & Konfirmasi
        </button>

        <p className="text-xs text-gray-400 mb-4">*Pesan konfirmasi akan otomatis disalin. Tinggal Paste di grup.</p>

        <button onClick={() => window.location.reload()} className="text-[#22D3EE] hover:underline text-sm">
          Isi ulang form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1E293B]/60 backdrop-blur-md border border-[#2563EB]/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0B1120] rounded-t-2xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      <div className="mb-8 mt-2 flex justify-between items-end">
        <div>
          <span className="text-xs font-bold tracking-wider text-[#7C3AED] uppercase mb-1 block">Langkah {step} dari 3</span>
          <h3 className="text-xl font-bold text-white">
            {step === 1 ? 'Data Dasar' : step === 2 ? 'Profil Web3' : 'Goal & Insight'}
          </h3>
        </div>
        <div className="text-xs text-gray-500 hidden sm:block">
          Gratis · 3 Menit
        </div>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : handleNext}>
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <InputField
              label="Email kamu"
              name="email"
              type="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={handleChange}
              helper="Cuma buat kirim roadmap. Nggak akan dishare ke siapapun."
              required
            />
            <InputField
              label="Nama Lengkap"
              name="name"
              type="text"
              placeholder="Satoshi Nakamoto"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Usia kamu sekarang?</label>
              <div className="grid grid-cols-3 gap-3">
                {['< 20', '20 - 30', '> 30'].map(opt => (
                  <RadioCard key={opt} name="age" value={opt} label={opt} selected={formData.age} onChange={handleChange} />
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Berapa lama main Crypto?</label>
              <div className="grid gap-3">
                {[
                  { val: 'Newbie', desc: '< 6 Bulan (Masih belajar)' },
                  { val: 'Explorer', desc: '6 Bulan - 2 Tahun (Udah pernah cuan/boncos)' },
                  { val: 'Veteran', desc: '> 3 Tahun (Udah ngelewatin bear market)' }
                ].map(opt => (
                  <RadioCardRow key={opt.val} name="experience" value={opt.val} label={opt.val} sub={opt.desc} selected={formData.experience} onChange={handleChange} />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Peran utamamu?</label>
              <div className="grid grid-cols-2 gap-3">
                {['Trader', 'Holder', 'Developer', 'Airdrop Hunter'].map(opt => (
                  <RadioCard key={opt} name="role" value={opt} label={opt} selected={formData.role} onChange={handleChange} />
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            {/* Existing Goal Select */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Goal 3 bulan ke depan?*</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-[#0B1120] border border-[#2563EB]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors"
                required
              >
                <option value="">Pilih satu...</option>
                <option value="fundamental">Pahami Fundamental & Kurangi Judi</option>
                <option value="portfolio">Lipatgandakan Portfolio</option>
                <option value="platform">Cari Platform Fee Murah</option>
                <option value="network">Bangun Network Web3</option>
              </select>
            </div>

            {/* NEW: Belajar apa dari webinar ini? */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Belajar apa dari webinar ini?*</label>
              <textarea
                name="keyTakeaways"
                value={formData.keyTakeaways}
                onChange={handleChange}
                className="w-full bg-[#0B1120] border border-[#2563EB]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors h-24 resize-none placeholder-gray-500"
                placeholder="Ceritain 1-3 hal yang paling nyantol di pikiranmu"
                required
              ></textarea>
            </div>

            {/* NEW: Masukan untuk webinar? */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Masukan untuk webinar?*</label>
              <textarea
                name="webinarFeedback"
                value={formData.webinarFeedback}
                onChange={handleChange}
                className="w-full bg-[#0B1120] border border-[#2563EB]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors h-24 resize-none placeholder-gray-500"
                placeholder="Apa yang perlu kami benerin atau tambahin?"
                required
              ></textarea>
            </div>

            {/* NEW: Dari mana tau OXO? (Checkbox) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#E0F2FE]">Dari mana tau OXO?*</label>
              <div className="grid grid-cols-2 gap-2">
                {['Instagram', 'Referral', 'Twitter', 'Telegram', 'Google', 'WA Group'].map(opt => (
                  <label key={opt} className={`cursor-pointer border rounded-lg px-3 py-3 flex items-center transition-all ${formData.source.includes(opt) ? 'bg-[#2563EB]/20 border-[#7C3AED] text-white' : 'bg-[#0B1120] border-white/10 text-gray-400 hover:border-white/30'}`}>
                    <input
                      type="checkbox"
                      value={opt}
                      checked={formData.source.includes(opt)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${formData.source.includes(opt) ? 'border-[#7C3AED] bg-[#7C3AED]' : 'border-gray-500'}`}>
                      {formData.source.includes(opt) && <CheckSquare size={12} className="text-white" />}
                    </div>
                    <span className="text-sm font-medium">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start pt-2">
              <input type="checkbox" className="mt-1 mr-3 rounded border-gray-600 bg-[#0B1120] text-[#7C3AED] focus:ring-[#7C3AED]" required />
              <span className="text-xs text-gray-400">Saya setuju data dipakai buat analisis dan kirim roadmap. Bisa berhenti kapan aja.</span>
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 font-medium transition-colors"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold shadow-lg shadow-[#2563EB]/20 hover:shadow-[#2563EB]/40 hover:scale-[1.02] transition-all flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 w-5 h-5" />
                Sending...
              </>
            ) : (
              <>
                {step === 3 ? 'Kirim & Dapatkan Roadmap' : 'Lanjut'}
                {step !== 3 && <ChevronRight className="ml-2 w-4 h-4" />}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

// Form Inputs Helpers
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, helper, ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-[#E0F2FE]">{label}</label>
    <input
      className="w-full bg-[#0B1120] border border-[#2563EB]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
      {...props}
    />
    {helper && <p className="text-xs text-gray-400">{helper}</p>}
  </div>
);

const RadioCard = ({ name, value, label, selected, onChange }: any) => (
  <label className={`cursor-pointer border rounded-lg px-3 py-3 text-center transition-all ${selected === value ? 'bg-[#2563EB]/20 border-[#7C3AED] text-white' : 'bg-[#0B1120] border-white/10 text-gray-400 hover:border-white/30'}`}>
    <input type="radio" name={name} value={value} checked={selected === value} onChange={onChange} className="hidden" />
    <span className="text-sm font-medium">{label}</span>
  </label>
);

const RadioCardRow = ({ name, value, label, sub, selected, onChange }: any) => (
  <label className={`cursor-pointer border rounded-lg px-4 py-3 flex items-center transition-all ${selected === value ? 'bg-[#2563EB]/20 border-[#7C3AED]' : 'bg-[#0B1120] border-white/10 hover:border-white/30'}`}>
    <input type="radio" name={name} value={value} checked={selected === value} onChange={onChange} className="hidden" />
    <div className={`w-4 h-4 rounded-full border mr-4 flex items-center justify-center ${selected === value ? 'border-[#7C3AED]' : 'border-gray-500'}`}>
      {selected === value && <div className="w-2 h-2 rounded-full bg-[#7C3AED]"></div>}
    </div>
    <div>
      <div className={`text-sm font-bold ${selected === value ? 'text-white' : 'text-gray-300'}`}>{label}</div>
      <div className="text-xs text-gray-500">{sub}</div>
    </div>
  </label>
);

// FAQ Accordion
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg bg-[#1E293B]/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-[#E0F2FE]">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`px-6 text-gray-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 py-4 border-t border-white/5' : 'max-h-0'}`}>
        {answer}
      </div>
    </div>
  );
};

export default OXOLanding;
