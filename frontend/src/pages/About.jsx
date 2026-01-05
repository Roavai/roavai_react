import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const [isWarping, setIsWarping] = useState(false)
    const navigate = useNavigate()

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
