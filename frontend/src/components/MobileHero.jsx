import { motion } from 'framer-motion'
import robotVideo from '../assets/robowink5.mp4'


function MobileHero() {
    return (

        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black">
            <video
                src={robotVideo}
                poster={heroPoster}
                autoPlay
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover z-0"
            />
            {/* Overlay removed to allow interaction if needed, or just relying on Play button */}

            <div className="relative z-20 flex h-full flex-col items-center justify-center pt-20 px-4 text-center pointer-events-none">
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
                    className="font-orbitron text-[1rem] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto"
                >
                    <div>A robot that learns,</div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 2.0 }}
                    className="font-orbitron text-[1rem] leading-relaxed tracking-[0.12em] text-white/85 pointer-events-auto"
                >
                    <div>plays and lives with you.</div>
                </motion.div>
            </div>
        </section>
    )
}

export default MobileHero
