import About from './About.jsx'
import Contact from './Contact.jsx'
import MobileHero from '../components/MobileHero.jsx'
import DesktopHero from '../components/DesktopHero.jsx'


function Home() {

    return (
        <>
            <div id="home">

                <div className="md:hidden">
                    <MobileHero />
                </div>
                <div className="hidden md:block">
                    <DesktopHero />
                </div>
            </div>
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
