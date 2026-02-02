// layouts/BlogLayout.jsx
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function BlogLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="nav-link-font font-semibold flex h-14 items-center justify-between px-4 md:px-8">
                <a href="/" className="nav-link-cursor font-logo text-2xl md:text-3xl tracking-[0.1em]">
                    ROAVAI
                </a>
            </header>

            <main className="px-6 pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
