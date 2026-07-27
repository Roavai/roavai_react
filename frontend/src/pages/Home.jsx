import HeroSection from '../components/HeroSection.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import GradientBackground from '../components/GradientBackground.jsx'
import CloudTutorOverview from '../components/CloudTutorOverview.jsx'
import WiniLearningCycleSection from '../components/WiniLearningCycleSection.jsx'
import CuriosityQuestionsSection from '../components/CuriosityQuestionsSection.jsx'

function Home() {
    return (
        <div className="relative">
            {/* Fixed Gradient Background */}
            <GradientBackground />

            {/* Scrollable Content */}
            <div className="relative z-10">
                <section className="min-h-screen">
                    <div id="home">
                        <HeroSection />
                    </div>
                </section>

                {/* Section 2: Cloud Tutor Problem & Solution Overview */}
                <CloudTutorOverview />

                {/* Section 2.5: Wini AI Learning Cycle (How Wini Works) */}
                <WiniLearningCycleSection />

                {/* Section 3: Curiosity Questions Constellation Section */}
                <CuriosityQuestionsSection />

                {/* <section className="min-h-screen">
                    <div id="blog-carousel">
                        <BlogCarousel />
                    </div>
                </section> */}

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
