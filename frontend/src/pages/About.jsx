import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const [isWarping, setIsWarping] = useState(false)
    const navigate = useNavigate()

    // Randomize comet positions periodically
    useEffect(() => {
        const randomizeComets = () => {
            const comets = document.querySelectorAll('.comet')
            comets.forEach((comet) => {
                // Randomly choose between spawning from Top edge or Right edge
                const fromTop = Math.random() > 0.5

                if (fromTop) {
                    // Spawn from Top edge
                    const randomTop = Math.random() * 10 - 15 // -15% to -5% (Just above screen)
                    const randomRight = Math.random() * 100 - 20 // -20% to 80% (Spread across width)
                    comet.style.top = `${randomTop}%`
                    comet.style.right = `${randomRight}%`
                } else {
                    // Spawn from Right edge
                    const randomRight = Math.random() * 10 - 15 // -15% to -5% (Just right of screen)
                    const randomTop = Math.random() * 80 - 10 // -10% to 70% (Spread across height)
                    comet.style.top = `${randomTop}%`
                    comet.style.right = `${randomRight}%`
                }
            })
        }

        // Initial randomization
        randomizeComets()

        // Re-randomize every 8 seconds
        const interval = setInterval(randomizeComets, 8000)

        return () => clearInterval(interval)
    }, [])

    const handleExplore = (e) => {
        e.preventDefault()
        setIsWarping(true)
        // Navigate after animation
        setTimeout(() => {
            navigate('/explore', { state: { fromWarp: true } })
        }, 400)
    }

    return (
        <section className={`relative min-h-screen overflow-hidden text-white bg-black ${isWarping ? 'warp-active' : ''}`}>
            {/* Star field background */}
            <div className="star-field">
                <div className="stars stars-small"></div>
                <div className="stars stars-medium"></div>
                <div className="stars stars-large"></div>
                {/* Random comets */}
                <div className="comet comet-1"></div>
                <div className="comet comet-2"></div>
            </div>

            {/* Content */}
            <div className={`relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center transition-opacity duration-300 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                {/* Big title */}
                <h1 className="font-orbitron mb-8 text-4xl tracking-[0.4em] md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    ABOUT&nbsp;US
                </h1>

                {/* Paragraph text */}
                <p className="font-orbitron tracking-wider mb-8 text-base leading-relaxed text-gray-200 md:text-lg max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    We build foundational robotics technology that transforms robots from
                    machines into living companions — intelligent, expressive, and
                    human-like. Welcome to ROAVAI — this is our story.
                </p>

                {/* Explore button */}
                <button onClick={handleExplore} className="font-orbitron explore-button cursor-pointer">
                    Explore
                </button>
            </div>
        </section>
    )
}

export default About
