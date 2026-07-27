import { Outlet, useNavigate, Link } from 'react-router-dom'
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
                <Link to="/" className="nav-link-cursor font-logo text-2xl md:text-3xl tracking-[0.1em]">
                    ROAVAI
                </Link>
                <button
                    onClick={handleBack}
                    className="nav-link-cursor nav-link-font text-base tracking-wide text-white/70 hover:text-white transition-colors flex items-center"
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
