import { motion } from 'framer-motion'

const STEPS = [
    {
        step: 1,
        iconBg: 'bg-[#f3e8ff] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'Understands The Learner',
        description: 'Models mastery, misconceptions, curiosity and learning history.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        step: 2,
        iconBg: 'bg-[#e6f4ea] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'Pedagogical Policy (RL)',
        description: 'RL-based policy chooses the best teaching action.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0-12.814a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0 12.814a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
        ),
    },
    {
        step: 3,
        iconBg: 'bg-[#fef3c7] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'Teaching Action Selected',
        description: 'Selects the optimal action: explain, hint, practice, or assess.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        step: 4,
        iconBg: 'bg-[#e0f2fe] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'AI Teacher Generates Content',
        description: 'Creates curriculum-aligned, age-appropriate content for the chosen action.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
        ),
    },
    {
        step: 5,
        iconBg: 'bg-[#ede9fe] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'Student Learns & Responds',
        description: 'Student interacts through voice, answers, activities and expressions.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        step: 6,
        iconBg: 'bg-[#dcfce7] text-slate-800',
        badgeBg: 'bg-black text-white',
        title: 'Learner Model Updates',
        description: 'New data updates the model. Teacher becomes more personalized over time.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
]

export default function WiniLearningCycleSection() {
    return (
        <section className="relative min-h-screen py-20 md:py-24 bg-[#F5CBCB] text-slate-900 flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
            {/* Minimal Dot Matrix Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none z-0" aria-hidden="true" />

            {/* Film Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] brightness-95 contrast-125 mix-blend-multiply pointer-events-none z-0" aria-hidden="true" />

            <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
                {/* Eyebrow + Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl"
                >
                    <span className="font-primary text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-700 uppercase mb-3 block">
                        HOW CLOUD TUTOR WORKS
                    </span>
                    <h2 className="font-primary font-black text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-black tracking-tight leading-tight uppercase">
                        A Learning Cycle That Makes Your Child <span className="text-slate-800">Better Every Day</span>
                    </h2>
                </motion.div>

                {/* 6 Step Interactive Timeline Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 items-start relative">
                    {STEPS.map((item, idx) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle Container with Step Badge */}
                            <div className="relative mb-5 flex items-center justify-center">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm border border-black/5`}>
                                    {item.icon}
                                </div>
                                {/* Pure Black Step Number Badge */}
                                <div className={`absolute -bottom-1 right-0 w-6 h-6 rounded-full ${item.badgeBg} text-xs font-primary font-bold flex items-center justify-center shadow-md border border-white`}>
                                    {item.step}
                                </div>
                            </div>

                            {/* Pure Black Title */}
                            <h3 className="font-primary font-bold text-sm sm:text-base text-slate-900 mb-2 leading-snug uppercase tracking-wide">
                                {item.title}
                            </h3>

                            {/* Soft Graphite Description */}
                            {item.description && (
                                <p className="font-sans text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-[220px]">
                                    {item.description}
                                </p>
                            )}

                            {/* Forward Connecting Arrow (Desktop) */}
                            {idx < STEPS.length - 1 && (
                                <div className="hidden lg:flex absolute top-8 sm:top-10 -right-4 lg:-right-5 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-slate-900/15 items-center justify-center text-slate-900 shadow-sm z-20 pointer-events-none">
                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            )}

                            {/* Downward Connecting Arrow (Mobile/Tablet) */}
                            {idx < STEPS.length - 1 && (
                                <div className="flex lg:hidden justify-center my-3 text-slate-900 pointer-events-none">
                                    <div className="w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm border border-slate-900/15 flex items-center justify-center text-slate-900 shadow-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
