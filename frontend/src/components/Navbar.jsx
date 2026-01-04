import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
    { label: 'Home', type: 'section', targetId: 'home' },
    { label: 'Product', type: 'section', targetId: 'product' },
    { label: 'Blogs', type: 'section', targetId: 'blog-carousel' },
    { label: 'About', type: 'section', targetId: 'about' },
    { label: 'Contact', type: 'section', targetId: 'contact' },
]

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
            <header className="fixed inset-x-0 top-0 z-40 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.2)_100%)] backdrop-blur-xs">
                <div className="relative flex h-14 items-center px-4 md:px-8">
                    <span className="nav-link-cursor text-2xl nav-link-font font-semibold tracking-[0.35em] text-gray-100">
                        <a
                            className="text-2xl md:text-3xl z-50 font-semibold tracking-[0.1em] text-white"
                            onClick={() => handleNavClick({ type: 'section', targetId: 'home' })}
                        > ROAVAI
                        </a>
                    </span>

                    <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-10 lg:flex">
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link)}
                                className="pointer-events-auto nav-link-font nav-link-cursor text-gray-300 transition hover:text-white"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                    {/* Invisible spacer to maintain layout */}
                    <div className="ml-auto w-8 h-8"></div>
                </div>
            </header>

            {/* Toggle button - positioned independently for proper z-index */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-3 right-4 md:right-8 z-70 nav-link-cursor font-semibold text-2xl text-gray-200 hover:text-white w-8 h-8 flex items-center justify-center"
                aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
                {/* Hamburger icon */}
                <span
                    className={`absolute transition-all duration-300 ease-in-out ${isSidebarOpen
                        ? 'opacity-0 rotate-90 scale-75'
                        : 'opacity-100 rotate-0 scale-100'
                        }`}
                >
                    ☰
                </span>
                {/* Close icon */}
                <span
                    className={`absolute transition-all duration-300 ease-in-out ${isSidebarOpen
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-75'
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
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
                    aria-label="Close menu backdrop"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-60 h-full w-80 bg-black backdrop-blur-xs text-gray-100 rounded-lg transition-transform duration-100 overflow-visible ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Shooting stars easter egg - positioned at top, travels through sidebar */}
                {isSidebarOpen && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                        <span className="shooting-star shooting-star-1" />
                        <span className="shooting-star shooting-star-2" />
                    </div>
                )}
                <div className="nav-link-font border-white/10 h-14 flex items-center px-8 relative">
                    <span
                        className="text-2xl font-semibold tracking-widest text-white nav-link-cursor relative z-10"
                        onClick={() => {
                            handleNavClick({ type: 'section', targetId: 'home' })
                            setIsSidebarOpen(false)
                        }}
                    >
                        ROAVAI
                    </span>
                </div>

                <nav className="flex flex-col gap-4 px-8 text-lg mt-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => {
                                handleNavClick(link)
                                setIsSidebarOpen(false)
                            }}
                            className="nav-link-cursor tracking-wide nav-link-font text-gray-200 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}

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


                    <div className="font-orbitron text-sm tracking-widest text-gray-300">📞 +91 7259544880</div>
                    <div className="font-orbitron text-sm tracking-widest text-gray-300 py-1">📞 +91 8618035867</div>

                    <div className="mt-5 border-white/10 py-4 text-sm flex space-x-4">

                        <a href="#" className="text-body hover:text-heading">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" /></svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.404.58A2.974 2.974 0 0 0 .502 6.186C0 8.13 0 12 0 12s0 3.87.502 5.814a2.974 2.974 0 0 0 2.094 2.106C4.53 20.5 12 20.5 12 20.5s7.47 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106C24 15.87 24 12 24 12s0-3.87-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" /></svg>

                            <span className="sr-only">Youtube</span>
                        </a>
                        <a href="https://x.com/_Roavai" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5H9.37V8.796h3.14ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2V8.809Z" /></svg>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )
}


export default Navbar
