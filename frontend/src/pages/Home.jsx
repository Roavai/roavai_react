import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'
import ScrollIndicator from '../components/ScrollIndicator.jsx'

function Home() {

    return (
        <>
            <ScrollIndicator />
            <section className="min-h-screen snap-start">
                <div id="home">
                    <Hero />
                </div>
            </section>
            <section className="min-h-screen snap-start">
                <div id="product">
                    <Product />
                </div>
            </section>
            <section className="min-h-screen snap-start">
                <div id="about">
                    <About />
                </div>
            </section>
            <section className="min-h-screen snap-start">
                <div id="contact">
                    <Contact />
                </div>
            </section>
        </>
    )
}

export default Home
