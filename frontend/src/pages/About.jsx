// Adjust the image import to your actual file
import AboutUsBG from '../assets/images/stellar-drift-1920x1080.png'

function About() {
    return (
        <section className="relative min-h-screen overflow-hidden text-white">
            {/* Background image */}
            <img
                src={AboutUsBG}
                alt="Dark sand background"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75"
            />

            {/* <video
                src={robotVideo}
                autoPlay
                muted
                playsInline
                loop
                alt="Dark sand background"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover z-0"
            /> */}

            {/* Dark overlay for readability */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
                {/* Big title */}
                <h1 className="font-orbitron mb-8 text-4xl tracking-[0.4em] md:text-6xl">
                    ABOUT&nbsp;US
                </h1>

                {/* Paragraph text */}
                <p className="font-orbitron tracking-wider mb-8 text-base leading-relaxed text-gray-200 md:text-lg">
                    We build foundational robotics technology that transforms robots from
                    machines into living companions — intelligent, expressive, and
                    human-like. Welcome to ROAVAI — this is our story.
                </p>

                {/* Explore button */}
                <a href="/explore" className="font-orbitron explore-button">
                    Explore
                </a>
            </div>
        </section>
    )
}

export default About
