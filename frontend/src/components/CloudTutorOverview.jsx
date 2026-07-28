import { useState } from 'react'
import { motion } from 'framer-motion'
import robotSquareImg from '../assets/Images/cloudtutorsquare.png'

const FEATURES = [
    {
        id: 'design',
        title: 'Table Top Kid-Friendly Design',
        targetDot: { x: '64%', y: '28%' },
        pillAnchor: { left: '86%', top: '12%', align: 'left' },
        lineSvg: (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    d="M 64 28 L 76 12 L 86 12"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                />
            </svg>
        ),
    },
    {
        id: 'screen',
        title: 'Eye-Safe E-Ink Screen',
        targetDot: { x: '52%', y: '48%' },
        pillAnchor: { left: '92%', top: '48%', align: 'left' },
        lineSvg: (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    d="M 52 48 L 92 48"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
                />
            </svg>
        ),
    },
    {
        id: 'ui',
        title: 'Interactive Learning UI',
        targetDot: { x: '44%', y: '63%' },
        pillAnchor: { left: '86%', top: '84%', align: 'left' },
        lineSvg: (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    d="M 44 63 L 76 84 L 86 84"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2 1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                />
            </svg>
        ),
    },
]

export default function CloudTutorOverview() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section className="relative min-h-screen md:h-screen pt-20 md:pt-24 pb-12 md:pb-8 overflow-x-hidden md:overflow-hidden bg-[#FFDDB0] text-black flex flex-col justify-center items-center px-4 sm:px-12 md:px-16 lg:px-24">
            {/* Layer 0: Minimal Geometry Dot Matrix Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#00000018_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none z-0" />

            {/* Layer 0: Film Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')] brightness-95 contrast-125 mix-blend-multiply pointer-events-none z-0" />

            <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column: Headline + YC Technical Sub-Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col text-center md:text-left"
                >
                    <h2 className="font-primary font-black text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.25rem] text-black tracking-wider leading-tight uppercase drop-shadow-sm">
                        Self improving personal AI tutor on a desktop robot
                    </h2>

                    {/* YC-Style Reframed Sub-Copy */}
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-black/85 font-sans leading-relaxed tracking-wide max-w-xl mx-auto md:mx-0 font-medium">
                        Cloud Tutor decodes student cognition in real time—detecting curiosity, confusion, and misconceptions. By combining curriculum knowledge graphs, RL-driven pedagogy policies, and adaptive RAG re-ranking, Cloud Tutor personalizes every <span className="font-bold text-black">Explain-Practice-Test</span> loop to continuously master learning.
                    </p>
                </motion.div>

                {/* Right Column: Centered Circle Cropped Robot Image (Square Source Image) */}
                <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative flex items-center justify-center lg:justify-center my-6 md:my-8"
                >
                    {/* Circle Frame Container - 1.1x Mobile Scale & Offset */}
                    <div className="relative z-10 w-72 h-72 sm:w-88 sm:h-88 md:w-[310px] md:h-[310px] lg:w-[340px] lg:h-[340px] rounded-full flex items-center justify-center group max-md:-translate-x-18 sm:max-md:-translate-x-22 md:-translate-x-8 lg:-translate-x-12 max-sm:scale-[0.48] max-md:scale-[0.66] md:scale-100 origin-center">
                        
                        {/* Synchronized Scaling Wrapper for Image + Overlay */}
                        <div className="relative w-full h-full rounded-full transition-transform duration-700 group-hover:scale-105">
                            <img
                                src={robotSquareImg}
                                alt="Cloud Tutor Desktop Robot"
                                className="w-full h-full rounded-full object-cover shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
                            />

                            {/* Always-Visible Animated Feature Overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                {FEATURES.map((feature) => {
                                    const isHovered = hoveredId === feature.id
                                    const xOffset = feature.pillAnchor.align === 'center' ? '-50%' : feature.pillAnchor.align === 'right' ? '-100%' : '0%'
                                    return (
                                        <div key={feature.id} className="contents">
                                            {/* Target Dot on Robot Body (Layer 30) */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                                className="absolute z-30 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                                                style={{ left: feature.targetDot.x, top: feature.targetDot.y }}
                                            >
                                                <span className="absolute w-full h-full rounded-full bg-black opacity-60 animate-ping" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
                                            </motion.div>

                                            {/* SVG Leader Line (Layer 20) */}
                                            {feature.lineSvg}

                                            {/* Feature Callout Pill Badge (Layer 30) */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                whileHover={{ scale: 1.08 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.3 }}
                                                onMouseEnter={() => setHoveredId(feature.id)}
                                                onMouseLeave={() => setHoveredId(null)}
                                                style={{
                                                    left: feature.pillAnchor.left,
                                                    top: feature.pillAnchor.top,
                                                    x: xOffset,
                                                    y: '-50%',
                                                }}
                                                className={`absolute z-30 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-white border border-white/20 backdrop-blur-xl shadow-2xl pointer-events-auto transition-colors duration-300 cursor-pointer ${isHovered ? 'bg-black border-white' : 'bg-black/90'
                                                    }`}
                                            >
                                                <h4 className="text-[20px] sm:text-[21.5px] md:text-sm font-primary font-bold text-white tracking-wider uppercase whitespace-nowrap">
                                                    {feature.title}
                                                </h4>
                                            </motion.div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
