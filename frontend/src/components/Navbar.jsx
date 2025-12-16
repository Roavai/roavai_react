// src/components/Navbar.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import XLogo from "../assets/images/X.png";
import FBLogo from "../assets/images/FB.svg";
import InstaLogo from "../assets/images/insta.svg";
import WhatsappLogo from "../assets/images/WhatsApp.svg";
import YoutubeLogo from "../assets/images/YouTube.svg";
import RoavaiLogo from "../assets/images/roavai.png";
import Home from '../pages/Home';



const navLinks = [
    { label: 'Home', type: 'section', targetId: 'home' },
    { label: 'Product', type: 'route', to: '/product' },
    { label: 'Blog', type: 'route', to: '/blog' },
    { label: 'About', type: 'section', targetId: 'about' },
    { label: 'Contact', type: 'section', targetId: 'contact' },
]

function Navbar() {
    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleNavClick = (link) => {
        if (link.type === 'section') {
            const el = document.getElementById(link.targetId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        } else if (link.type === 'route') {
            navigate(link.to)
        }
    }

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-60 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.08)_100%)] backdrop-blur-xs">
                <div className="relative flex h-16 items-center px-4 md:px-8">
                    <span className="nav-link-cursor text-2xl nav-link-font font-semibold tracking-[0.35em] text-gray-100">
                        <a
                            onClick={() => handleNavClick({ type: 'section', targetId: 'home' })}
                        > ROAVAI
                        </a>
                    </span>

                    <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-10 md:flex">
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
                        onClick={() => setIsSidebarOpen(prev => !prev)}
                        className="ml-auto font-semibold text-2xl text-gray-200 hover:text-white"
                        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isSidebarOpen ? '×' : '☰'}
                    </button>
                </div>
            </header>

            {/* Click-outside overlay */}
            {isSidebarOpen && (
                <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40"
                    aria-label="Close menu backdrop"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-80 bg-black/50 backdrop-blur-xs text-gray-100 rounded-lg transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="px-6 py-4 nav-link-font border-white/10">
                    {/* <span className="text-xs font-semibold tracking-[0.3em]">
                        MENU
                    </span> */}
                    {/* <button
                        type="button"
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-2xl text-gray-300 hover:text-white"
                        aria-label="Close menu"
                    >
                        ×
                    </button> */}
                </div>

                <nav className="flex flex-col gap-4 px-6 py-6 text-lg">
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setIsSidebarOpen(false)}
                            className="tracking-wide nav-link-font text-gray-200 hover:text-white"
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


                    <div className="text-gray-300">📞 +91 7259544880</div>
                    <div className="text-gray-300 py-1">📞 +91 8618035867</div>

                    <div className="mt-4 border-white/10 px-6 py-4 text-sm flex space-x-4">
                        {/* <a
                            href="https://x.com/roavai59108"
                            aria-label="Visit RoaVAI on X (Twitter)"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={XLogo} alt="X (Twitter) logo" className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={YoutubeLogo} alt="YouTube logo" className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={WhatsappLogo} alt="WhatsApp logo" className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={InstaLogo} alt="Instagram logo" className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={FBLogo} alt="Facebook logo" className="w-6 h-6" />
                        </a> */}
                        <a href="#" class="text-body hover:text-heading">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-body hover:text-heading ms-5">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" /></svg>
                            <span class="sr-only">Discord community</span>
                        </a>
                        <a href="#" class="text-body hover:text-heading ms-5">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-body hover:text-heading ms-5">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    )
}


export default Navbar
