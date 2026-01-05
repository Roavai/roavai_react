// router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import BaseLayout from './layouts/BaseLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Explore from './pages/subpages/explore.jsx'
import Careers from './pages/subpages/careers.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import BlogPost from './pages/BlogPost.jsx'
import BlogLayout from './layouts/BlogLayout'
import ScrollToTop from './helpers/ScrollToTop'

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Normal site with navbar/footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* Extra pages with only logo + back button + footer*/}
                <Route element={<BaseLayout />}>
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/blog" element={<Blog />} />
                    {/* add more minimal pages here */}
                </Route>

                {/* Blog post with only logo + footer*/}
                <Route element={<BlogLayout />}>
                    <Route path="/blog/:slug" element={<BlogPost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
