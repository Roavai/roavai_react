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

        < section className="relative min-h-screen overflow-hidden bg-black h-full" >

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
                        <div>
                            <motion.h1
                                className="introLineMid slide-intro-left-mid"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.2 }}
                            >
                                Wini
                            </motion.h1>
                        </div>
                        <div>
                            <motion.div
                                className="taglineBlock"
                                variants={taglineParent}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span className='text-lg' variants={taglineLine}>
                                    A robot that
                                </motion.span>
                                <motion.span className='text-lg' variants={taglineLine}>
                                    learns,
                                </motion.span>
                                <motion.span className='text-lg' variants={taglineLine}>
                                    plays,
                                </motion.span>
                                <motion.span className='text-lg' variants={taglineLine}>
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