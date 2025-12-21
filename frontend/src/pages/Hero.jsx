import DesktopHero from "../components/DesktopHero"
import MobileHero from "../components/MobileHero"

function Hero() {
    return (
        <div>
            <div className="md:hidden">
                <MobileHero />
            </div>
            <div className="hidden md:block">
                <DesktopHero />
            </div>
        </div>
    )
}
export default Hero