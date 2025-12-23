// router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MinimalLayout from './layouts/MinimalLayout'
import Home from './pages/Home'
import Explore from './pages/subpages/explore.jsx'
import Careers from './pages/subpages/careers.jsx'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Normal site with navbar/footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* Extra pages with only logo + back button + footer*/}
                <Route element={<MinimalLayout />}>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/careers" element={<Careers />} />
                    {/* add more minimal pages here */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
