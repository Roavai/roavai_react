// layouts/BaseLayout.jsx
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function BaseLayout() {
    const navigate = useNavigate()

    const handleBack = () => {
        if (window.history.length > 1) {
            // Go back to whatever page/scroll position they came from
            navigate(-1)
        } else {
            // Fallback if they opened this page directly (e.g., new tab)
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <header className="nav-link-font font-semibold flex h-14 items-center justify-between px-4 md:px-8">
                <span className="nav-link-cursor text-2xl nav-link-font font-semibold tracking-[0.35em] text-gray-100">
                    <a href="/" className="text-2xl md:text-3xl z-50 font-semibold tracking-[0.1em] text-white">
                        ROAVAI
                    </a>
                </span>
                <button
                    onClick={handleBack}
                    className="nav-link-cursor text-sm tracking-wide underline underline-offset-4"
                >
                    Back
                </button>
            </header>

            <main className="px-6 pb-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
