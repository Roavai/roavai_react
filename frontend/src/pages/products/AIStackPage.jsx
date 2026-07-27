import { motion } from 'framer-motion'
import GlowBackground from '../../components/GlowBackground.jsx'

export default function AIStackPage() {
    return (
        <div className="relative min-h-screen text-white bg-black overflow-hidden">
            {/* Ambient Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* AI Stack Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-24 px-6 md:px-16 lg:px-20 z-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-primary tracking-widest bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 backdrop-blur-md"
                    >
                        <span>⚡</span>
                        <span>ENTERPRISE ROBOTICS PLATFORM</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-['Fascinate',system-ui] text-white/90 text-6xl sm:text-7xl md:text-8xl leading-none tracking-wider"
                    >
                        AI Stack
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-primary text-gray-200 text-lg sm:text-2xl tracking-[0.1em] font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        Intelligent software infrastructure for modern robotics & hardware.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xs sm:text-base text-gray-300/80 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Modular OS, cloud fleet management, and real-time neural perception engines powering next-generation autonomous devices.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-4 flex justify-center"
                    >
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-primary tracking-widest text-black bg-white hover:bg-indigo-300 transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] group"
                        >
                            <span>Explore Software Stack</span>
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Platform Services Architecture Grid */}
            <section id="services" className="relative z-10 border-t border-white/10 pt-20 pb-28 px-6 md:px-16 lg:px-20 max-w-7xl mx-auto">
                <GlowBackground />
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-primary tracking-widest bg-white/10 border border-white/20 text-indigo-300 backdrop-blur-md">
                        ENTERPRISE CAPABILITIES
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-logo tracking-wider text-white">
                        Full-Stack Intelligence
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-md space-y-4">
                        <div className="text-3xl">🌐</div>
                        <h3 className="font-primary text-xl font-bold text-white">Fleet Orchestration</h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                            Real-time telemetry, remote OTA firmware updates, and cloud fleet synchronization across distributed hardware nodes.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-md space-y-4">
                        <div className="text-3xl">👁️</div>
                        <h3 className="font-primary text-xl font-bold text-white">Perception Engine</h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                            Low-latency spatial vision, SLAM mapping, and object segmentation running at edge TPU efficiency.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-950/60 border border-white/10 backdrop-blur-md space-y-4">
                        <div className="text-3xl">🔐</div>
                        <h3 className="font-primary text-xl font-bold text-white">Edge Security</h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                            End-to-end encrypted neural channels, hardware-level trust modules, and strict data privacy compliance.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
