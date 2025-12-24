import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <div id="footer" className="snap-start">
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;