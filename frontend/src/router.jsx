// router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MinimalLayout from './layouts/MinimalLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Explore from './pages/subpages/explore.jsx'
import Careers from './pages/subpages/careers.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Normal site with navbar/footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>

                {/* Extra pages with only logo + back button + footer*/}
                <Route element={<MinimalLayout />}>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    {/* add more minimal pages here */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
