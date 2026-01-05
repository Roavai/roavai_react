import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'
import BlogCarousel from './BlogCarousel.jsx'
import GradientBackground from '../components/GradientBackground.jsx'

function Home() {

    return (
        <div className="relative">
            {/* Fixed Gradient Background */}
            <GradientBackground />

            {/* Scrollable Content */}
            <div className="relative z-10">
                <section className="min-h-screen">
                    <div id="home">
                        <Hero />
                    </div>
                </section>
                <section className="min-h-screen">
                    <div id="product">
                        <Product />
                    </div>
                </section>
                <section className="min-h-screen">
                    <div id="blog-carousel">
                        <BlogCarousel />
                    </div>
                </section>
                <section className="min-h-screen">
                    <div id="about">
                        <About />
                    </div>
                </section>
                <section className="min-h-screen">
                    <div id="contact">
                        <Contact />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
