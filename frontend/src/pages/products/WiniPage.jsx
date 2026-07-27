import HeroSection from '../../components/HeroSection.jsx'
import Product from '../Product.jsx'
import BlogCarousel from '../../components/BlogCarousel.jsx'
import About from '../About.jsx'
import Contact from '../Contact.jsx'

export default function WiniPage() {
    return (
        <div className="relative min-h-screen text-white bg-black overflow-hidden">
            {/* Dedicated Wini Hero Section */}
            <HeroSection initialProductId="wini" />

            {/* Wini Feature Showcase Section */}
            <section className="relative z-10 border-t border-white/10 pt-12 pb-24">
                <Product />
            </section>

            {/* Shared Stories / Blog Carousel (Temporarily hidden for future rebuild) */}
            {/* <section className="min-h-screen">
                <div id="blog-carousel">
                    <BlogCarousel />
                </div>
            </section> */}

            {/* Shared About Section */}
            <section className="min-h-screen">
                <div id="about">
                    <About />
                </div>
            </section>

            {/* Shared Contact Section */}
            <section className="min-h-screen">
                <div id="contact">
                    <Contact />
                </div>
            </section>
        </div>
    )
}
