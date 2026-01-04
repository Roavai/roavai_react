// layouts/BaseLayout.jsx
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function BlogLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="nav-link-font font-semibold flex h-14 items-center justify-between px-4 md:px-8">
                <span className="nav-link-cursor text-2xl nav-link-font font-semibold tracking-[0.35em] text-gray-100">
                    <a href="/" className="text-2xl md:text-3xl z-50 font-semibold tracking-[0.1em] text-white">
                        ROAVAI
                    </a>
                </span>
            </header>

            <main className="px-6 pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
