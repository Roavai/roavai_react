import { motion } from 'framer-motion'
import robotVideo from '../assets/robowink5.mp4'
import heroPoster from '../assets/Images/robowink5last.png'


function MobileHero() {
    return (

        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black">
            <video
                src={robotVideo}
                poster={heroPoster}
                autoPlay
                muted
                playsInline
                className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
            />
            <div className="absolute inset-0 z-10" />

            <div className="relative z-20 flex h-full flex-col items-center justify-center pt-20 px-4 text-center">
                <motion.h1
                    className="petName text-[6vh] leading-none mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                >
                    Wini
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                    className="text-[0.8rem] leading-relaxed tracking-[0.12em] text-white/85"
                >
                    <div className="font-medium">A robot that learns,</div>
                    <div>plays and lives with you.</div>
                </motion.div>
            </div>
        </section>
    )
}

export default MobileHero
