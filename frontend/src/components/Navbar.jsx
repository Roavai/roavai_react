import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
    { label: 'Home', type: 'section', targetId: 'home' },
    { label: 'Product', type: 'section', targetId: 'product' },
    { label: 'Blog', type: 'route', to: '/blog' },
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
            <header className="fixed inset-x-0 top-0 z-40 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.08)_100%)] backdrop-blur-xs">
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
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="nav-link-cursor ml-auto font-semibold text-2xl text-gray-200 hover:text-white"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                </div>
            </header>

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
                className={`fixed top-0 right-0 z-60 h-full w-80 bg-black/50 backdrop-blur-xs text-gray-100 rounded-lg transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="nav-link-font border-white/10">

                    {/* top row with X */}
                    <div className="flex items-center justify-end px-4 py-4 z-40">
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen(false)}
                            className="nav-link-cursor font-semibold text-xl text-white"
                            aria-label="Close menu"
                        >
                            X
                        </button>
                    </div>
                </div>

                <nav className="flex flex-col gap-4 px-8 text-lg">
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
                </nav>

                {/* contact + socials */}
                <div className="mt-4 border-t border-white/10 px-6 py-4 text-sm">
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
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" /></svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.404.58A2.974 2.974 0 0 0 .502 6.186C0 8.13 0 12 0 12s0 3.87.502 5.814a2.974 2.974 0 0 0 2.094 2.106C4.53 20.5 12 20.5 12 20.5s7.47 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106C24 15.87 24 12 24 12s0-3.87-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" /></svg>

                            <span className="sr-only">Youtube</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading ms-5">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRrule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" /></svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )
}


export default Navbar
