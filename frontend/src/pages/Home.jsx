import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'


function Home() {

    return (
        <>

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
                <div id="about">
                    <About />
                </div>
            </section>
            <section className="min-h-screen">
                <div id="contact">
                    <Contact />
                </div>
            </section>
        </>
    )
}

export default Home
