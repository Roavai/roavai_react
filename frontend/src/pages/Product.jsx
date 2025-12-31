import { useState } from 'react'
import { FEATURES } from '../utils/featuresData'

// Import assets
import bgFeatures from '../assets/images/pexels-tofros-com-83191-257853.jpg'
import featureAi from '../assets/images/feature_ai.png'
import featureVision from '../assets/images/feature_vision.png'
import featureVoice from '../assets/images/feature_voice.png'
import featureMotion from '../assets/images/feature_motion.png'
import featureCharging from '../assets/images/feature_charging.png'
import featureMapping from '../assets/images/feature_mapping.png'

// Mapping features to images
const FEATURE_IMAGES = [
    featureAi,
    featureVision,
    featureVoice,
    featureMotion,
    featureCharging,
    featureMapping
]

function Product() {
    const [activeId, setActiveId] = useState(0)

    const active = FEATURES.find((f) => f.id === activeId)

    const handleNext = () => {
        setActiveId((prev) => (prev + 1) % FEATURES.length)
    }

    const handlePrev = () => {
        setActiveId((prev) =>
            prev === 0 ? FEATURES.length - 1 : prev - 1
        )
    }

    return (
        <section
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${bgFeatures})` }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Main Content Container */}
            <div className="relative z-10 pt-20 mx-auto flex h-screen max-w-7xl flex-col md:flex-row items-center justify-center p-6 gap-8">

                {/* --- DESKTOP: LEFT LIST (25%) --- */}
                <div className="hidden md:flex w-full md:w-1/4 flex-col justify-center space-y-6">
                    {FEATURES.map((f) => (
                        <div
                            key={f.id}
                            onMouseEnter={() => setActiveId(f.id)}
                            className={`group flex cursor-pointer items-center gap-4 transition-all duration-300 ${f.id === activeId ? 'translate-x-4 opacity-100' : 'opacity-50 hover:opacity-80'
                                }`}
                        >
                            {/* Visual Indicator Line for active state */}
                            <div className={`h-10 w-1 rounded-full transition-colors duration-300 ${f.id === activeId ? 'bg-white' : 'bg-transparent'
                                }`} />

                            <div className="flex flex-col">
                                <span className={`font-orbitron text-lg font-bold tracking-wider ${f.id === activeId ? 'text-white' : 'text-gray-400'}`}>
                                    {f.label}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>

                {/* --- DESKTOP: RIGHT PREVIEW (75%) --- */}
                <div className="hidden md:block h-[75vh] aspect-[4/3]">
                    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm transition-all duration-500">
                        {/* Image Slide */}
                        <img
                            key={activeId} // Key change triggers animation
                            src={FEATURE_IMAGES[activeId]}
                            alt={active.title}
                            className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 animate-fadeIn"
                        />

                        {/* Description Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/10 to-transparent px-12 pt-12 pb-6">
                            <p className="font-sans max-w-2xl text-lg text-gray-200 leading-relaxed">
                                {active.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE: CAROUSEL VIEW --- */}
                <div className="flex md:hidden h-full chat-screen w-full flex-col justify-center items-center gap-6">

                    {/* Top: Navigation Title */}
                    <div className="w-full flex justify-center px-4 mb-2">
                        <h2 className="font-orbitron text-sm font-bold text-white tracking-widest leading-tight animate-fadeIn bg-white/5 rounded-full backdrop-blur-sm border border-white/10 py-2 px-6">
                            {active.label.toUpperCase()}
                        </h2>
                    </div>

                    {/* Middle: Image Preview */}
                    <div className="relative w-full aspect-square max-w-sm rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <img
                            key={activeId}
                            src={FEATURE_IMAGES[activeId]}
                            alt={active.title}
                            className="h-full w-full object-cover animate-fadeIn"
                        />
                    </div>

                    {/* Mobile Description (Outside Box) */}
                    <div className="w-full max-w-sm px-4">
                        <p className="text-sm text-gray-200 text-center leading-relaxed font-light">
                            {active.description}
                        </p>
                    </div>

                    {/* Bottom: Navigation Controls (Arrows + Dots) */}
                    <div className="flex items-center justify-center gap-6 mt-4 w-full px-4">
                        <button onClick={handlePrev} className="p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <div className="flex gap-2">
                            {FEATURES.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveId(f.id)}
                                    className={`h-2 rounded-full transition-all duration-300 ${f.id === activeId ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                                        }`}
                                    aria-label={`Go to feature ${f.id + 1}`}
                                />
                            ))}
                        </div>

                        <button onClick={handleNext} className="p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

            </div>

            {/* Inline Animation Style for fade/slide effects */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default Product
