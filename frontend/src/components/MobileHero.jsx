import { motion } from 'framer-motion'
import robotVideoWebm from '../assets/robowinknobg.webm'
import heroPoster from '../assets/Images/robowinknobg.png'
import GlowBackground from './GlowBackground'

function MobileHero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <GlowBackground />
            <video
                poster={heroPoster}
                autoPlay
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover z-10"
                style={{ transform: 'translateZ(0)' }}
            >
                <source src={robotVideoWebm} type="video/webm" />
            </video>

            {/* Mobile Corner Radial Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)] z-[15] pointer-events-none" />
            
            {/* Mobile Top-to-Bottom Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45 z-[15] pointer-events-none" />

            <div className="relative z-20 flex h-full flex-col items-center justify-center mt-14 pt-[2vh] px-4 text-center pointer-events-none">
                {/* Title (No Drop Shadow) */}
                <motion.h1
                    className="hero-name-mobile text-[6vh] leading-none mb-3 pointer-events-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
                >
                    Wini
                </motion.h1>

                {/* Smaller Subtitle Text (Softened Drop Shadow) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.8 }}
                    className="font-primary text-[2vh] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
                >
                    <div>A robot that learns,</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 2.0 }}
                    className="font-primary text-[2vh] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
                >
                    <div>plays and lives with you.</div>
                </motion.div>
            </div>
        </section>
    )
}

export default MobileHero
