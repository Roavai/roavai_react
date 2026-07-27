import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import BaseLayout from './layouts/BaseLayout'
import ScrollToTop from './helpers/ScrollToTop'
import PageLoader from './components/PageLoader'

// Lazy-loaded route components for code splitting & optimal bundle size
const Home = lazy(() => import('./pages/Home'))
const WiniPage = lazy(() => import('./pages/products/WiniPage'))
const AIStackPage = lazy(() => import('./pages/products/AIStackPage'))
const Explore = lazy(() => import('./pages/subpages/Explore'))
const Careers = lazy(() => import('./pages/subpages/Careers'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Normal site with navbar & footer */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/wini" element={<WiniPage />} />
                        <Route path="/ai-stack" element={<AIStackPage />} />
                    </Route>

                    {/* Subpages with logo, back button & footer */}
                    <Route element={<BaseLayout />}>
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
