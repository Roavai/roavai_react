import { useState, useEffect, useRef } from 'react'

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Product' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'footer', label: 'Footer' },
]

export default function ScrollIndicator() {
    const [activeSection, setActiveSection] = useState('home')

    const visibleSections = useRef(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Update the set of visible sections
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.current.add(entry.target.id)
                    } else {
                        visibleSections.current.delete(entry.target.id)
                    }
                })

                // Determine the active section:
                // We prioritize the sections in reverse order (bottom-most first).
                // If the footer is visible, it wins. If not, check contact, etc.
                const newActive = [...sections]
                    .reverse()
                    .find((section) => visibleSections.current.has(section.id))

                if (newActive) {
                    setActiveSection(newActive.id)
                }
            },
            {
                // Lower threshold to ensure long sections are caught.
                // But enough to avoid noise.
                threshold: 0.3
            }
        )

        sections.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        // Cleanup
        return () => observer.disconnect()
    }, [])

    const handleScrollTo = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center md:flex">
            {/* The vertical line */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-white/20" />

            <div className="flex flex-col gap-12 py-4">
                {sections.map(({ id, label }) => {
                    const isActive = activeSection === id
                    return (
                        <div key={id} className="relative flex items-center justify-center">
                            <button
                                onClick={() => handleScrollTo(id)}
                                className={`
                                    relative z-10 h-3 w-3 rotate-45 transition-all duration-500 ease-out border bg-black
                                    ${isActive
                                        ? 'scale-[1.8] border-white/40 hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                                        : 'border-white/40 hover:border-white/80 hover:bg-white/10'
                                    }
                                `}
                                aria-label={`Scroll to ${label}`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
