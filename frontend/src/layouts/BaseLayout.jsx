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
            <header className="nav-link-font font-semibold flex items-center justify-between px-8 py-5.5">
                <a href="/" className="nav-link-cursor  nav-link-font  text-gray-100 text-xl font-semibold tracking-[0.3em]">
                    ROAVAI
                </a>
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
