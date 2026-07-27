import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function getRandomComet() {
    const fromTop = Math.random() > 0.5
    const top = fromTop ? `${Math.random() * 20 - 15}%` : `${Math.random() * 65 - 10}%`
    const right = fromTop ? `${Math.random() * 80 - 10}%` : `${Math.random() * 15 - 15}%`
    const width = `${Math.floor(Math.random() * 40 + 50)}px`
    const animationDuration = `${(Math.random() * 1.2 + 2.8).toFixed(1)}s`
    return { top, right, width, animationDuration, id: Math.random() }
}

function About() {
    const [isWarping, setIsWarping] = useState(false)
    const [comet1, setComet1] = useState(getRandomComet)
    const [comet2, setComet2] = useState(getRandomComet)
    const navigate = useNavigate()

    // Reduced frequency: trigger randomized shooting comets every 7.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setComet1(getRandomComet())
            setTimeout(() => setComet2(getRandomComet()), 3500)
        }, 7500)

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
            <div className="star-field" aria-hidden="true">
                <div className="stars stars-small"></div>
                <div className="stars stars-medium"></div>
                <div className="stars stars-large"></div>
                {/* Dynamically randomized shooting comets */}
                <div
                    key={comet1.id}
                    className="comet"
                    style={{
                        top: comet1.top,
                        right: comet1.right,
                        width: comet1.width,
                        animationDuration: comet1.animationDuration,
                    }}
                />
                <div
                    key={comet2.id}
                    className="comet"
                    style={{
                        top: comet2.top,
                        right: comet2.right,
                        width: comet2.width,
                        animationDuration: comet2.animationDuration,
                    }}
                />
            </div>

            {/* Content */}
            <div className={`relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-24 md:pt-28 pb-12 text-center transition-opacity duration-300 ${isWarping ? 'opacity-0' : 'opacity-100'}`}>
                {/* Big title */}
                <h1 className="font-primary mb-8 text-4xl tracking-[0.4em] md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    ABOUT&nbsp;US
                </h1>

                {/* Paragraph text */}
                <p className="font-primary tracking-wider mb-8 text-base leading-relaxed text-gray-200 md:text-lg max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    We build foundational robotics technology that transforms robots from
                    machines into living companions — intelligent, expressive, and
                    human-like. Welcome to ROAVAI — this is our story.
                </p>

                {/* Explore button */}
                <button onClick={handleExplore} className="font-primary explore-button cursor-pointer">
                    Explore
                </button>
            </div>
        </section>
    )
}

export default About
