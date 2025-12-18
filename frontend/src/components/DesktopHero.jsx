import { motion } from 'framer-motion'
import robotVideo from '../assets/robowink5.mp4'

function DesktopHero() {

    const taglineParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 1.6,
            },
        },
    }

    const taglineLine = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    }

    return (

        < section className="relative min-h-[calc(100vh)] overflow-hidden bg-black h-full" >

            <div>

                <video
                    src={robotVideo}
                    autoPlay
                    muted
                    playsInline
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
                />
                <div className="heroMidTextRow">

                    <div className="heroMidInner">
                        <div className="heroMidOffsetTitle">
                            <p className="introLineMid slide-intro-left-mid">
                                <motion.h1
                                    className="petName"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                >
                                    Wini
                                </motion.h1>
                            </p>
                        </div>
                        <div className="heroMidOffsetTagline">
                            <motion.div
                                className="taglineBlock"
                                variants={taglineParent}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span className="tagLine" variants={taglineLine}>
                                    A robot that
                                </motion.span>
                                <motion.span className="tagLine" variants={taglineLine}>
                                    learns,
                                </motion.span>
                                <motion.span className="tagLine" variants={taglineLine}>
                                    plays,
                                </motion.span>
                                <motion.span className="tagLine" variants={taglineLine}>
                                    and lives with you
                                </motion.span>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default DesktopHero