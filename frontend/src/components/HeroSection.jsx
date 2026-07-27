import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useReserve } from '../context/ReserveContext'

import cloudTutorDesktopImg from '../assets/Images/cloud_tutor_desktop.jpg'
import cloudTutorMobileImg from '../assets/Images/cloud_tutor_mobile.jpg'
import robotVideoWebm from '../assets/robowinknobg.webm'
import heroPoster from '../assets/Images/robowinknobg.png'
import GlowBackground from './GlowBackground'

const PRODUCTS = [
    {
        id: 'cloud-tutor',
        name: 'Cloud Tutor',
        badge: 'INTERACTIVE AI TUTOR',
        tagline: 'A companion that teaches, guides, and grows with you.',
        description: '',
        route: '/',
        ctaLabel: 'Reserve Cloud Tutor',
        mediaType: 'image',
        desktopImg: cloudTutorDesktopImg,
        mobileImg: cloudTutorMobileImg,
    },
    {
        id: 'wini',
        name: 'Wini',
        badge: 'PERSONAL ROBOT COMPANION',
        tagline: 'A robot that learns, plays, and lives with you.',
        description: '',
        route: '/wini',
        ctaLabel: 'Explore Wini',
        mediaType: 'video',
        videoSrc: robotVideoWebm,
        posterSrc: heroPoster,
    },
]

export default function HeroSection({ initialProductId = 'cloud-tutor' }) {
    const navigate = useNavigate()
    const { openReserveModal } = useReserve()
    const [selectedId, setSelectedId] = useState(initialProductId)
    const [hasWiniPlayed, setHasWiniPlayed] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        setSelectedId(initialProductId)
    }, [initialProductId])

    const handleLoadedMetadata = () => {
        if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = videoRef.current.duration * 0.25
        }
    }

    const activeProduct = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[0]
    const isCloudTutor = activeProduct.id === 'cloud-tutor'

    const handleSelectProduct = (prodId) => {
        setSelectedId(prodId)
        const targetProd = PRODUCTS.find((p) => p.id === prodId)
        if (targetProd && targetProd.route && targetProd.route !== window.location.pathname) {
            navigate(targetProd.route)
        }
    }

    return (
        <section className="relative h-screen min-h-screen overflow-hidden bg-black">
            {/* Background Layer with Crossfade Animation */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    {activeProduct.mediaType === 'image' ? (
                        <motion.div
                            key={`image-${activeProduct.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 h-full w-full z-0"
                        >
                            {/* Mobile Portrait Image */}
                            <img
                                src={cloudTutorMobileImg}
                                alt={activeProduct.name}
                                className="block md:hidden pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
                            />
                            {/* Desktop Landscape Image */}
                            <img
                                src={cloudTutorDesktopImg}
                                alt={activeProduct.name}
                                className="hidden md:block pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
                            />

                            {/* Cinematic Film Grain Overlay */}
                            <div className="absolute inset-0 opacity-[0.22] bg-[url('/noise.svg')] brightness-105 contrast-125 mix-blend-overlay z-10 pointer-events-none" />

                            {/* Radial Corner Vignette (Both Mobile & Desktop) */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.35)_100%)] z-10 pointer-events-none" />
                            
                            {/* Desktop Text Contrast Overlay */}
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/25 z-10 pointer-events-none" />
                            
                            {/* Mobile Top & Bottom Contrast Gradient Overlay */}
                            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45 z-10 pointer-events-none" />
                        </motion.div>
                    ) : activeProduct.mediaType === 'video' ? (
                        <motion.div
                            key="wini-video"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 h-full w-full z-0 pointer-events-none"
                        >
                            {/* Layer 0: Glow Background */}
                            <div className="absolute inset-0 z-0">
                                <GlowBackground />
                            </div>

                            {/* Layer 10: Video or Static Image */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                                {hasWiniPlayed ? (
                                    <img
                                        src={activeProduct.posterSrc}
                                        alt={activeProduct.name}
                                        className="w-full h-full object-cover mix-blend-screen pointer-events-none relative z-10"
                                    />
                                ) : (
                                    <video
                                        ref={videoRef}
                                        key={`video-${activeProduct.id}`}
                                        src={activeProduct.videoSrc}
                                        poster={activeProduct.posterSrc}
                                        autoPlay
                                        muted
                                        playsInline
                                        onLoadedMetadata={handleLoadedMetadata}
                                        onEnded={() => setHasWiniPlayed(true)}
                                        className="w-full h-full object-cover mix-blend-screen pointer-events-none relative z-10"
                                    />
                                )}
                            </div>

                            {/* Mobile Contrast Overlay for Video */}
                            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-15 pointer-events-none" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="tech-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 bg-black z-0 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                            <div className="absolute w-[60vw] h-[60vh] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
                            <div className="absolute w-[40vw] h-[40vh] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hero Overlay Content */}
            <div
                className={`absolute inset-0 z-20 mx-auto max-w-7xl px-6 md:px-16 lg:px-20 pt-20 md:pt-24 pb-16 md:pb-12 flex flex-col md:flex-row ${
                    isCloudTutor ? 'justify-between md:justify-end' : 'justify-between md:justify-between'
                } items-center text-center md:text-left pointer-events-none`}
            >
                {/* Desktop Cloud Tutor Container */}
                <div
                    className={
                        isCloudTutor
                            ? 'contents md:w-1/2 md:ml-auto md:flex md:flex-col md:justify-center md:items-start md:text-left md:gap-5 md:pl-16'
                            : 'contents'
                    }
                >
                    {/* Top Section */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`top-${activeProduct.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left gap-1 w-full"
                        >
                            {/* Product Title */}
                            <h1 className="font-['Fascinate',system-ui] text-white/95 text-6xl sm:text-7xl md:text-[10vh] lg:text-[12vh] leading-none text-center md:text-left tracking-wider pointer-events-auto mt-1 md:mt-0">
                                {activeProduct.name}
                            </h1>

                            {/* Subtitle Text */}
                            <span className="font-primary text-xs sm:text-sm tracking-[0.25em] text-cyan-300 font-medium uppercase text-center md:text-left w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                                {activeProduct.badge}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Section */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`bottom-${activeProduct.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 16 }}
                            transition={{ duration: 0.5 }}
                            className={`flex flex-col items-center md:items-start text-center md:text-left gap-3 pointer-events-auto max-w-md mb-2 md:mb-0 w-full ${
                                !isCloudTutor ? 'md:translate-x-12 lg:translate-x-20 md:max-w-sm' : ''
                            }`}
                        >
                            {/* Tagline */}
                            <p className="font-primary text-gray-100 text-sm sm:text-base md:text-xl tracking-[0.1em] font-medium leading-snug text-center md:text-left w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                                {activeProduct.tagline}
                            </p>

                            {/* Description */}
                            {activeProduct.description && (
                                <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed hidden sm:block mt-2 md:mt-0 text-center md:text-left w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                                    {activeProduct.description}
                                </p>
                            )}

                            {/* CTA Button */}
                            <div className="pt-3 md:pt-1 translate-y-2 md:translate-y-0 flex justify-center md:justify-start w-full">
                                {activeProduct.id === 'cloud-tutor' || (activeProduct.id === 'wini' && window.location.pathname === '/wini') ? (
                                    <button
                                        type="button"
                                        onClick={() => openReserveModal(activeProduct.name)}
                                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-primary tracking-widest text-white/90 bg-white/10 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-md shadow-sm group select-none pointer-events-auto cursor-pointer"
                                    >
                                        <span>{activeProduct.id === 'wini' ? 'Reserve Wini' : activeProduct.ctaLabel}</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        to={activeProduct.route}
                                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-primary tracking-widest text-white/90 bg-white/10 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-md shadow-sm group select-none pointer-events-auto"
                                    >
                                        <span>{activeProduct.ctaLabel || `Explore ${activeProduct.name}`}</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Glassmorphic Pill Selector Bar */}
            <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-auto px-4 w-[92vw] sm:w-auto flex justify-center">
                <nav className="flex items-center justify-between sm:justify-center w-full sm:w-auto gap-1 p-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                    {PRODUCTS.map((prod) => {
                        const isActive = prod.id === selectedId
                        return (
                            <button
                                key={prod.id}
                                onClick={() => handleSelectProduct(prod.id)}
                                className={`relative flex-1 sm:flex-none text-center px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-primary tracking-wider transition-colors duration-300 nav-link-cursor select-none ${
                                    isActive ? 'text-black font-bold' : 'text-gray-300 hover:text-white font-medium'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="heroActivePill"
                                        className="absolute inset-0 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] z-0"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 whitespace-nowrap">{prod.name}</span>
                            </button>
                        )
                    })}
                </nav>
            </div>
        </section>
    )
}
