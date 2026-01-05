import { motion } from 'framer-motion'
import robotVideoWebm from '../assets/robowinknobg.webm'
import heroPoster from '../assets/images/robowinknobg.png'
import GlowBackground from './GlowBackground'


function MobileHero() {
    return (

        <section className="relative min-h-screen overflow-hidden">
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


            <div className="relative z-5 flex h-full flex-col items-center justify-center mt-14 pt-[2vh] px-4 text-center pointer-events-none">
                <motion.h1
                    className="hero-name-mobile text-[6vh] leading-none mb-3 pointer-events-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
                >
                    Wini
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.8 }}
                    className="font-orbitron text-[2vh] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto"
                >
                    <div>A robot that learns,</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 2.0 }}
                    className="font-orbitron text-[2vh] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto"
                >
                    <div>plays and lives with you.</div>
                </motion.div>
            </div>
        </section>
    )
}

export default MobileHero
