import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'

function Home() {

    return (
        <>
            <section>
                <div id="home">
                    <Hero />
                </div>
            </section>
            <section>
                <div id="product">
                    <Product />
                </div>
            </section>
            <section>
                <div id="about">
                    <About />
                </div>
            </section>
            <section>
                <div id="contact">
                    <Contact />
                </div>
            </section>
        </>
    )
}

export default Home
