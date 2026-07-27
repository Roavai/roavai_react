import { motion } from 'framer-motion'

import skyPrismImg from '../assets/Images/curiosity_sky_prism.jpg'
import skyImg from '../assets/Images/curiosity_sky.jpg'
import skyCloudsImg from '../assets/Images/curiosity_sky_clouds.jpg'
import skyRayImg from '../assets/Images/curiosity_sky_ray.jpg'

import birdEagleImg from '../assets/Images/curiosity_bird_eagle.jpg'
import birdWingImg from '../assets/Images/curiosity_bird_wing.jpg'

import moonImg from '../assets/Images/curiosity_moon.jpg'
import moonEarthriseImg from '../assets/Images/curiosity_moon_earthrise.jpg'
import moonFootprintImg from '../assets/Images/curiosity_moon_footprint.jpg'

import mathImg from '../assets/Images/curiosity_math.jpg'
import mathGridImg from '../assets/Images/curiosity_math_grid.jpg'
import mathChalkImg from '../assets/Images/curiosity_math_chalk.jpg'

// Custom Meaningful Scientific Illustration SVG Data URIs
const SVG_BIRD_LIFT = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="%230f172a"/><path d="M15 55 Q 35 25 85 52 Q 40 58 15 55 Z" fill="%2338bdf8" opacity="0.8"/><path d="M5 35 C 30 15 70 30 95 45" stroke="%2338bdf8" stroke-width="1.5" stroke-dasharray="3 2"/><path d="M5 65 C 35 68 70 65 95 65" stroke="%2338bdf8" stroke-width="1.5" stroke-dasharray="3 2"/><path d="M45 42 L45 15 M40 22 L45 15 L50 22" stroke="%23facc15" stroke-width="2"/><text x="45" y="10" fill="%23facc15" font-size="8" font-family="sans-serif" text-anchor="middle">LIFT</text></svg>`

const SVG_MATH_PROOF = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="%23020617"/><path d="M30 65 L65 65 L30 30 Z" fill="%23f59e0b" opacity="0.3" stroke="%23f59e0b" stroke-width="1.5"/><rect x="5" y="30" width="25" height="35" fill="%2338bdf8" opacity="0.2" stroke="%2338bdf8" stroke-width="1"/><rect x="30" y="65" width="35" height="25" fill="%2310b981" opacity="0.2" stroke="%2310b981" stroke-width="1"/><text x="18" y="50" fill="%2338bdf8" font-size="9" font-family="sans-serif">a²</text><text x="48" y="80" fill="%2310b981" font-size="9" font-family="sans-serif">b²</text><text x="50" y="42" fill="%23f59e0b" font-size="9" font-family="sans-serif">c²</text></svg>`

const SVG_MOON_PHASES = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="%23030712"/><circle cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2"/><circle cx="50" cy="50" r="12" fill="%233b82f6"/><circle cx="50" cy="18" r="4" fill="%23fef08a"/><circle cx="82" cy="50" r="4" fill="%23fef08a"/><path d="M 82 46 A 4 4 0 0 1 82 54 Z" fill="%23030712"/><circle cx="50" cy="82" r="4" fill="%23fef08a"/><circle cx="18" cy="50" r="4" fill="%23fef08a"/><path d="M 18 46 A 4 4 0 0 0 18 54 Z" fill="%23030712"/></svg>`

const SVG_SKY_SCATTER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="%23020617"/><circle cx="50" cy="65" r="28" fill="%231e3a8a"/><path d="M15 20 C 35 30 65 30 85 20" stroke="%2360a5fa" stroke-width="2"/><path d="M20 25 L35 45 M40 30 L55 50 M60 25 L70 48 M45 20 L40 55" stroke="%2338bdf8" stroke-width="1.2" stroke-dasharray="2 2"/><circle cx="35" cy="45" r="2" fill="%2338bdf8"/><circle cx="55" cy="50" r="2" fill="%2338bdf8"/><circle cx="40" cy="55" r="2" fill="%2338bdf8"/><text x="50" y="12" fill="%2393c5fd" font-size="7" font-family="sans-serif" text-anchor="middle">Rayleigh Scattering</text></svg>`

const CONSTELLATIONS = [
    {
        id: 'sky',
        question: 'Why is the sky blue?',
        posClass: 'max-md:top-[8%] max-md:left-[12%] md:top-[18%] md:left-[10%]',
        thumbnails: [
            { id: 1, src: skyPrismImg, sizeClass: 'w-14 h-14', dx: -160, dy: -62 },
            { id: 2, src: skyImg, sizeClass: 'w-12 h-12', dx: 155, dy: -65 },
            { id: 3, src: skyCloudsImg, sizeClass: 'w-12 h-15', dx: -155, dy: 62 },
            { id: 4, src: skyRayImg, sizeClass: 'w-15 h-11', dx: 165, dy: 60 },
            { id: 5, src: SVG_SKY_SCATTER, sizeClass: 'w-13 h-13', dx: 0, dy: -88 },
        ],
    },
    {
        id: 'birds',
        question: 'How do birds fly?',
        posClass: 'max-md:top-[28%] max-md:right-[10%] md:top-[16%] md:right-[18%]',
        thumbnails: [
            { id: 1, src: birdEagleImg, sizeClass: 'w-[3.75rem] h-11', dx: -160, dy: -62 },
            { id: 2, src: birdWingImg, sizeClass: 'w-12 h-[3.75rem]', dx: 155, dy: 60 },
            { id: 3, src: SVG_BIRD_LIFT, sizeClass: 'w-14 h-14', dx: 0, dy: -88 },
        ],
    },
    {
        id: 'moon',
        question: 'Tell me about the Moon?',
        posClass: 'max-md:bottom-[26%] max-md:left-[12%] md:bottom-[9%] md:left-[8%]',
        thumbnails: [
            { id: 1, src: moonImg, sizeClass: 'w-14 h-14', dx: -160, dy: -68 },
            { id: 2, src: moonEarthriseImg, sizeClass: 'w-[3.75rem] h-11', dx: 150, dy: -75 },
            { id: 3, src: moonFootprintImg, sizeClass: 'w-12 h-[3.75rem]', dx: -140, dy: 72 },
            { id: 4, src: SVG_MOON_PHASES, sizeClass: 'w-[3.25rem] h-[3.25rem]', dx: 170, dy: 50 },
        ],
    },
    {
        id: 'math',
        question: 'Explain Pythagoras theorem?',
        posClass: 'max-md:bottom-[6%] max-md:right-[10%] md:bottom-[22%] md:right-[14%]',
        thumbnails: [
            { id: 1, src: mathImg, sizeClass: 'w-14 h-14', dx: -150, dy: -85 },
            { id: 2, src: mathGridImg, sizeClass: 'w-12 h-[3.75rem]', dx: 175, dy: -45 },
            { id: 3, src: mathChalkImg, sizeClass: 'w-[3.75rem] h-11', dx: -180, dy: 55 },
            { id: 4, src: SVG_MATH_PROOF, sizeClass: 'w-[3.25rem] h-[3.25rem]', dx: 135, dy: 85 },
        ],
    },
]

export default function CuriosityQuestionsSection() {
    return (
        <section className="relative min-h-screen md:h-screen pt-20 md:pt-24 pb-12 md:pb-8 overflow-hidden bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 sm:px-16 lg:px-24 select-none">
            {/* Layer 0: Minimal Dot Matrix Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:2.5rem_2.5rem] pointer-events-none z-0" aria-hidden="true" />

            {/* Layer 0: Film Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.14] bg-[url('/noise.svg')] brightness-105 contrast-125 mix-blend-overlay pointer-events-none z-0" aria-hidden="true" />

            {/* Layer 0: Center Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none z-0" aria-hidden="true" />

            {/* Layer 20: Center Main Copy (Dedicated Safe Zone in Middle) */}
            <div className="max-w-[280px] sm:max-w-xl md:max-w-2xl mx-auto text-center z-20 relative space-y-4 sm:space-y-6 px-2 sm:px-4 my-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-serif sm:font-sans font-normal text-base sm:text-4xl md:text-5xl text-white/95 leading-[1.35] tracking-tight drop-shadow-md"
                >
                    Cloud Tutor is built to unlock kids curiosity and to make them fall in love with learning.
                </motion.h2>
            </div>

            {/* Layer 10: Asymmetrical Organic Curiosity Constellations */}
            <div className="absolute inset-0 z-10 pointer-events-none max-w-7xl mx-auto">
                {CONSTELLATIONS.map((cluster) => (
                    <div
                        key={cluster.id}
                        className={`absolute ${cluster.posClass} flex items-center justify-center max-md:scale-[0.54] md:scale-100 origin-center`}
                    >
                        {/* Flex Container Centered around the Cluster Question Text */}
                        <div className="relative flex items-center justify-center">

                            {/* Clean Floating Question Text with 1.2x Mobile Font Scale (Layer 30) */}
                            <h3
                                style={{
                                    textShadow: '0 0 24px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,1), 0 2px 4px rgba(0,0,0,1)',
                                }}
                                className="relative z-30 font-serif text-[18.5px] sm:text-lg md:text-lg text-white font-bold tracking-wide max-w-[160px] sm:max-w-[200px] text-center leading-snug whitespace-normal"
                            >
                                {cluster.question}
                            </h3>

                            {/* SVG Radial Connecting Lines (Layer 10) */}
                            <svg
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none overflow-visible z-10"
                                viewBox="-240 -240 480 480"
                                aria-hidden="true"
                            >
                                {cluster.thumbnails.map((thumb) => (
                                    <line
                                        key={`line-${thumb.id}`}
                                        x1="0"
                                        y1="0"
                                        x2={thumb.dx}
                                        y2={thumb.dy}
                                        stroke="rgba(255,255,255,0.25)"
                                        strokeWidth="1"
                                        strokeDasharray="2.5 2.5"
                                    />
                                ))}
                            </svg>

                            {/* 100% Unique & Topic-Relevant Radial Thumbnail Images (Layer 20) */}
                            {cluster.thumbnails.map((thumb) => (
                                <div
                                    key={`thumb-${thumb.id}`}
                                    className={`absolute z-20 ${thumb.sizeClass} rounded-md border border-white/20 overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.85)] bg-black/90 top-1/2 left-1/2`}
                                    style={{
                                        transform: `translate(calc(-50% + ${thumb.dx}px), calc(-50% + ${thumb.dy}px))`,
                                    }}
                                >
                                    <img src={thumb.src} alt={cluster.question} className="w-full h-full object-cover" />
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
