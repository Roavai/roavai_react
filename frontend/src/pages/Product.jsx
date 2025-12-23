import { useState } from 'react'
import { FEATURES } from '../utils/featuresData'
import WiniModel from '../components/WiniModel.jsx'


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
        <section className="bg-black text-white">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-15 px-4 md:flex-row md:items-center">
                {/* Left: feature list (desktop) / hidden on mobile */}
                <div className="w-full md:w-1/3">
                    <h2 className="font-orbitron mb-10 text-4xl font-extrabold tracking-wide">
                        FEATURES
                    </h2>

                    <ul className="space-y-8 font-semibold hidden md:block">
                        {FEATURES.map((f) => (
                            <li
                                key={f.id}
                                onMouseEnter={() => setActiveId(f.id)}
                                className={`flex cursor-pointer items-center gap-3 text-lg transition ${f.id === activeId ? 'text-white' : 'text-gray-400'
                                    }`}
                            >
                                <span className="text-2xl">{f.emoji}</span>
                                <span
                                    className={
                                        f.id === activeId ? 'font-orbitron font-semibold' : 'font-orbitron'
                                    }
                                >
                                    {f.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile “pagination” bullets */}
                    <div className="mt-6 flex justify-center gap-2 md:hidden">
                        {FEATURES.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveId(f.id)}
                                className={`h-2 w-2 rounded-full ${f.id === activeId ? 'bg-red-500' : 'bg-zinc-700'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: video / detail card */}
                <div className="relative w-full md:w-2/3">
                    {/* Background video or image */}
                    <div className="relative overflow-hidden rounded-3xl bg-zinc-900">
                        {/* Replace with your <video> or <img> */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <WiniModel />
                        </div>

                        {/* Gradient overlay for text */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </div>

                    <div className="flex flex-col h-48 justify-start pt-6 md:h-auto md:justify-end md:pt-0 md:p-10">
                        <h3 className="font-orbitron mb-3 text-3xl font-extrabold tracking-[0.2em] md:text-4xl">
                            {active.title}
                        </h3>
                        <p className="font-orbitron tracking-widest max-w-2xl text-sm text-gray-200 md:text-base">
                            {active.description}
                        </p>
                    </div>

                    {/* Mobile arrows */}
                    <div className="mt-10 flex items-center justify-center gap-10 md:hidden">
                        <button
                            onClick={handlePrev}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900" /* text-sm hover:border-red-500 hover:text-red-400 */
                        >
                            ‹
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900" /* text-sm hover:border-red-500 hover:text-red-400 */
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
