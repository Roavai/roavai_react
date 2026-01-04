import { useLocation } from 'react-router-dom'
import { useEffect, useState, useLayoutEffect } from 'react'

function Explore() {
    const location = useLocation()
    const [showContent, setShowContent] = useState(false)
    const fromWarp = location.state?.fromWarp

    useLayoutEffect(() => {
        // Temporarily disable smooth scrolling globally to prevent "scrolling up" animation
        const originalScrollBehavior = document.documentElement.style.scrollBehavior
        document.documentElement.style.scrollBehavior = 'auto'

        // Force scroll to top instantly
        window.scrollTo(0, 0)

        // Restore smooth scrolling after a short delay
        const scrollTimer = setTimeout(() => {
            document.documentElement.style.scrollBehavior = originalScrollBehavior
        }, 50)

        if (fromWarp) {
            // Delay content appearance after warp animation
            setTimeout(() => setShowContent(true), 300)
        } else {
            setShowContent(true)
        }

        return () => clearTimeout(scrollTimer)
    }, [fromWarp])

    return (
        <main className={`min-h-screen bg-black text-white ${fromWarp ? 'warp-arrival' : ''}`}>
            <div className={`mx-auto max-w-4xl px-6 py-20 md:py-28 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                {/* Back Button */}
                <a
                    href="/"
                    className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 hover:text-white transition-colors"
                >
                    <span className="font-bold group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    Back to Home
                </a>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
                        Our Story
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        From a vision to reality — discover how ROAVAI is redefining the future of robotics and human-machine interaction.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="space-y-16">
                    <section>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-white">
                            The Beginning
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            ROAVAI was founded with a singular vision: to create robots that don't just serve, but truly connect with humans. We believe that the future of robotics lies not in cold, mechanical efficiency, but in warm, intelligent companionship.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-white">
                            Our Mission
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            We're building foundational robotics technology that transforms machines into living companions — intelligent, expressive, and human-like. Our robots don't just respond; they understand, adapt, and grow alongside their human partners.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-white">
                            The Technology
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            At the heart of ROAVAI is a unique blend of advanced AI, expressive motion systems, and semantic understanding. Our robots perceive the world, understand context, and express themselves in ways that feel natural and intuitive.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-white">
                            Join the Journey
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            We're always looking for passionate individuals who share our vision. Whether you're an engineer, designer, or dreamer — there's a place for you at ROAVAI.
                        </p>
                        <a href="/careers" className="font-orbitron explore-button">
                            View Careers
                        </a>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Explore
