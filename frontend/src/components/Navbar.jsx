import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Home', type: 'section', targetId: 'home' },
    { label: 'Product', type: 'dropdown' },
    // { label: 'Blogs', type: 'section', targetId: 'blog-carousel' },
    { label: 'About', type: 'section', targetId: 'about' },
    { label: 'Contact', type: 'section', targetId: 'contact' },
]

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
    const [isMobileProductExpanded, setIsMobileProductExpanded] = useState(false)
    const dropdownTimerRef = useRef(null)

    // Handle scroll on mount if navigating from another page
    useEffect(() => {
        if (location.state && location.state.targetId) {
            const el = document.getElementById(location.state.targetId)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
                // Clear state
                window.history.replaceState({}, document.title)
            }
        }
    }, [location])

    const handleMouseEnterProduct = () => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
        setIsProductDropdownOpen(true)
    }

    const handleMouseLeaveProduct = () => {
        dropdownTimerRef.current = setTimeout(() => {
            setIsProductDropdownOpen(false)
        }, 150)
    }

    const handleNavClick = (link) => {
        if (link.type === 'section') {
            if (location.pathname !== '/') {
                navigate('/', { state: { targetId: link.targetId } })
            } else {
                const el = document.getElementById(link.targetId)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }
        } else if (link.type === 'route') {
            navigate(link.to)
        }
    }

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.15)_60%,transparent_100%)] backdrop-blur-sm">
                <div className="relative flex h-14 items-center px-4 md:px-8">
                    <span className="nav-link-cursor text-2xl font-logo tracking-[0.35em]">
                        <a
                            href="/"
                            className="text-2xl md:text-3xl z-50 tracking-[0.1em] text-white font-bold transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] inline-block"
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick({ type: 'section', targetId: 'home' })
                            }}
                        >
                            ROAVAI
                        </a>
                    </span>

                    {/* Desktop Navigation */}
                    <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-10 lg:flex items-center">
                        {navLinks.map((link) => {
                            if (link.type === 'dropdown') {
                                return (
                                    <div
                                        key={link.label}
                                        className="relative pointer-events-auto"
                                        onMouseEnter={handleMouseEnterProduct}
                                        onMouseLeave={handleMouseLeaveProduct}
                                    >
                                        <button
                                            onClick={() => navigate('/wini')}
                                            className="nav-link-font nav-link-cursor text-white font-medium transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)] flex items-center gap-1.5 py-2"
                                        >
                                            <span>Product</span>
                                            <svg
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                    isProductDropdownOpen ? 'rotate-180 text-white' : 'text-gray-300'
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>

                                        {/* Minimal Glassmorphic Dropdown Menu */}
                                        <AnimatePresence>
                                            {isProductDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.18, ease: 'easeOut' }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-black/85 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 flex flex-col gap-4 pointer-events-auto"
                                                >
                                                    {/* Products Category */}
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="text-[11px] font-primary tracking-[0.25em] text-white/40 font-medium uppercase px-2 mb-0.5">
                                                            Products
                                                        </div>
                                                        <Link
                                                            to="/"
                                                            onClick={() => setIsProductDropdownOpen(false)}
                                                            className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200 group text-left"
                                                        >
                                                            <span className="font-primary text-sm tracking-wider text-white/90 group-hover:text-white transition-colors font-medium">
                                                                Cloud Tutor
                                                            </span>
                                                            <span className="text-xs text-white/50 group-hover:text-white/70 font-light tracking-wide mt-0.5">
                                                                Interactive AI Tutor for Kids
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            to="/wini"
                                                            onClick={() => setIsProductDropdownOpen(false)}
                                                            className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200 group text-left"
                                                        >
                                                            <span className="font-primary text-sm tracking-wider text-white/90 group-hover:text-white transition-colors font-medium">
                                                                Wini
                                                            </span>
                                                            <span className="text-xs text-white/50 group-hover:text-white/70 font-light tracking-wide mt-0.5">
                                                                Personal Robot Companion
                                                            </span>
                                                        </Link>
                                                     </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            }

                            return (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link)}
                                    className="pointer-events-auto nav-link-font nav-link-cursor text-white font-medium transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]"
                                >
                                    {link.label}
                                </button>
                            )
                        })}
                    </nav>

                    {/* Invisible spacer to maintain layout */}
                    <div className="ml-auto w-8 h-8"></div>
                </div>
            </header>

            {/* Toggle button - positioned independently for proper z-index */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-3 right-4 md:right-8 z-[70] nav-link-cursor font-semibold text-2xl text-white w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]"
                aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            >
                {/* Hamburger icon */}
                <span
                    className={`absolute transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                >
                    ☰
                </span>
                {/* Close icon */}
                <span
                    className={`absolute transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                >
                    ✕
                </span>
            </button>

            {/* Click-outside overlay */}
            {isSidebarOpen && (
                <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    aria-label="Close menu backdrop"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-[60] h-full w-80 bg-black backdrop-blur-sm text-gray-100 rounded-lg transition-transform duration-100 overflow-visible ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Shooting stars easter egg */}
                {isSidebarOpen && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                        <span className="shooting-star shooting-star-1" />
                        <span className="shooting-star shooting-star-2" />
                    </div>
                )}
                <div className="nav-link-font border-white/10 h-14 flex items-center px-8 relative">
                    <span
                        className="text-2xl font-logo tracking-widest nav-link-cursor relative z-10"
                        onClick={() => {
                            handleNavClick({ type: 'section', targetId: 'home' })
                            setIsSidebarOpen(false)
                        }}
                    >
                        ROAVAI
                    </span>
                </div>

                <nav className="flex flex-col gap-4 px-8 text-lg mt-6">
                    {navLinks.map((link) => {
                        if (link.type === 'dropdown') {
                            return (
                                <div key={link.label} className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setIsMobileProductExpanded(!isMobileProductExpanded)}
                                        className="flex items-center justify-between nav-link-cursor tracking-wide nav-link-font text-gray-200 hover:text-white text-left"
                                    >
                                        <span>Products & Services</span>
                                        <span className="text-xs text-gray-400">{isMobileProductExpanded ? '−' : '+'}</span>
                                    </button>

                                    {isMobileProductExpanded && (
                                        <div className="flex flex-col pl-4 border-l border-white/15 gap-3 my-1">
                                            <Link
                                                to="/"
                                                onClick={() => setIsSidebarOpen(false)}
                                                className="flex flex-col py-1 group text-left"
                                            >
                                                <span className="text-gray-200 group-hover:text-white font-primary text-xs font-medium">
                                                    Cloud Tutor
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-light">Interactive AI Tutor</span>
                                            </Link>
                                            <Link
                                                to="/wini"
                                                onClick={() => setIsSidebarOpen(false)}
                                                className="flex flex-col py-1 group text-left"
                                            >
                                                <span className="text-gray-200 group-hover:text-white font-primary text-xs font-medium">
                                                    Wini
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-light">Personal Robot Companion</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        return (
                            <button
                                key={link.label}
                                onClick={() => {
                                    handleNavClick(link)
                                    setIsSidebarOpen(false)
                                }}
                                className="nav-link-cursor tracking-wide nav-link-font text-gray-200 hover:text-white text-left"
                            >
                                {link.label}
                            </button>
                        )
                    })}

                    {/* Careers link with separator */}
                    <div className="border-t border-b border-white/10 pt-4 mt-2 pb-4">
                        <Link
                            to="/careers"
                            onClick={() => setIsSidebarOpen(false)}
                            className="nav-link-cursor tracking-wide nav-link-font text-gray-200 hover:text-white"
                        >
                            Careers
                        </Link>
                    </div>
                </nav>

                {/* contact + socials */}
                <div className="mt-4 px-6 py-4 text-sm">
                    <h3 className="mb-2 py-2 text-xs nav-link-font font-semibold tracking-[0.3em] text-gray-400">
                        CONTACT INFO
                    </h3>

                    <a
                        href="tel:+917259544880"
                        className="block font-primary text-sm tracking-widest text-gray-300 hover:text-white transition-colors"
                    >
                        📞 +91 7259544880
                    </a>
                    <a
                        href="tel:+918618035867"
                        className="block font-primary text-sm tracking-widest text-gray-300 hover:text-white transition-colors py-1"
                    >
                        📞 +91 8618035867
                    </a>
                </div>
            </aside>
        </>
    )
}

export default Navbar
