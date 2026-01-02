// layouts/BaseLayout.jsx
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function BaseLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="nav-link-font font-semibold flex items-center justify-between px-8 py-5.5">
                <a href="/" className="nav-link-cursor  nav-link-font  text-gray-100 text-xl font-semibold tracking-[0.3em]">
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
