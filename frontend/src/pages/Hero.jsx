import DesktopHero from "../components/DesktopHero"
import MobileHero from "../components/MobileHero"
import { useMediaQuery } from "../hooks/useMediaQuery"

function Hero() {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <div>
            {isDesktop ? <DesktopHero /> : <MobileHero />}
        </div>
    )
}
export default Hero