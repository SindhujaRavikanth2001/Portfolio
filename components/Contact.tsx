'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiInstagram, FiUser, FiMessageSquare, FiShare2 } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section min-h-screen flex items-center justify-center bg-transparent">
      <div className="w-full max-w-4xl mx-auto px-2">
        <h2 className="heading text-black text-center mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Form Card */}
          <div className="flex-1">
            <div className="relative rounded-3xl shadow-2xl h-full">
              <div className="rounded-2xl bg-[#1e1538] backdrop-blur-xl p-4 md:p-6 h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 text-base">Open to exciting new opportunities! Feel free to reach out — I'm always happy to connect and collaborate.</p>
                  </div>
                  <FiShare2 className="text-[#9D5EFF] text-2xl md:text-3xl" />
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] border border-white/10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] border border-white/10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400 text-lg" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] border border-white/10 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#573c5e] text-white font-semibold text-lg shadow-lg hover:bg-[#7e3261] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    <FiSend className="text-xl" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  {success && <div className="text-green-500 text-center mt-2">{success}</div>}
                  {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                </form>
              </div>
            </div>
          </div>
          {/* Right: Social Links Card */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative rounded-3xl shadow-2xl h-full">
              <div className="rounded-2xl bg-[#1e1538] backdrop-blur-xl p-4 md:p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white text-center mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a href="https://www.linkedin.com/in/sindhuja-ravikanth/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-[#573c5e] hover:bg-[#7e3261] transition-all">
                    <span className="bg-[#0077b5]/20 p-2 rounded-lg"><FiLinkedin className="text-[#0077b5] text-2xl" /></span>
                    <div>
                      <span className="block font-bold text-white">LinkedIn</span>
                      <span className="block text-gray-400 text-sm">sindhuja-ravikanth</span>
                    </div>
                  </a>
                  <a href="mailto:tcp.sindhuja@gmail.com" className="flex items-center gap-4 p-3 rounded-xl bg-[#573c5e] hover:bg-[#7e3261] transition-all">
                    <span className="bg-[#9D5EFF]/20 p-2 rounded-lg"><FiMail className="text-[#9D5EFF] text-2xl" /></span>
                    <div>
                      <span className="block font-bold text-white">Mail</span>
                      <span className="block text-gray-400 text-sm">tcp.sindhuja@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://github.com/SindhujaRavikanth2001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-[#573c5e] hover:bg-[#7e3261] transition-all">
                    <span className="bg-gray-400/20 p-2 rounded-lg"><FiGithub className="text-gray-300 text-2xl" /></span>
                    <div>
                      <span className="block font-bold text-white">Github</span>
                      <span className="block text-gray-400 text-sm">@SindhujaRavikanth2001</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#1e1538] text-sm">© 2025 - All Rights Reserved.</div>
      </div>
    </section>
  );
} 