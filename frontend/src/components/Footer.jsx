import ROAVAI from "../assets/Images/RoavaiLOGO.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
    const [clickCount, setClickCount] = useState(0);
    const [showRocket, setShowRocket] = useState(false);
    const [showStars, setShowStars] = useState(false);

    const handleLogoClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount >= 2) {
            setShowRocket(true);
            setClickCount(0);
            // Show stars when rocket almost vanishes (at 2s mark)
            setTimeout(() => {
                setShowStars(true);
            }, 2000);
            // Hide rocket at 4s
            setTimeout(() => setShowRocket(false), 4000);
            // Hide stars after 2 seconds
            setTimeout(() => setShowStars(false), 5000);
        }
    };

    return (
        <>
            <footer
                className="text-gray-300 relative bg-no-repeat bg-cover bg-center overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse 150% 80% at 50% 115%, rgba(5,5,10,1) 0%, rgba(15,20,25,1) 40%, rgba(0,0,0,1) 70%)'
                }}
            >
                {/* Rocket easter egg - positioned inside footer near logo */}
                {showRocket && (
                    <div className="rocket-launch" />
                )}

                {/* "To the stars" message with stars */}
                {showStars && (
                    <div className="to-the-stars">
                        <span className="star star-1">✦</span>
                        <span className="star star-2">✧</span>
                        <span className="stars-text">to the stars</span>
                        <span className="star star-3">✧</span>
                        <span className="star star-4">✦</span>
                    </div>
                )}

                <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <button
                                type="button"
                                aria-label="Roavai Easter Egg"
                                className="flex items-start cursor-pointer focus:outline-none"
                                onClick={handleLogoClick}
                            >
                                <img src={ROAVAI} className="h-24 w-auto" alt="Roavai Logo" />
                            </button>
                        </div>
                        <div className="nav-link-font grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">Company</h2>
                                <ul className="text-body font-small">
                                    <li className="mb-4">
                                        <Link to="/explore" className="nav-link-cursor">About</Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/careers" className="nav-link-cursor">Careers</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">Follow us</h2>
                                <ul className="text-body text-md font-small">
                                    <li className="mb-4">
                                        <a href="https://x.com/_Roavai" target="_blank" rel="noopener noreferrer" className="nav-link-cursor">X</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://youtube.com/@roavai_social?si=-y_z8HVRNj9ZMlVC" target="_blank" rel="noopener noreferrer" className="nav-link-cursor">YouTube</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="nav-link-cursor">Instagram</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.linkedin.com/company/roavaipvtltd/about/" target="_blank" rel="noopener noreferrer" className="nav-link-cursor">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-heading uppercase">Legal</h2>
                                <ul className="text-body font-small">
                                    <li className="mb-4">
                                        <Link to="/privacy-policy" className="nav-link-cursor">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms" className="nav-link-cursor">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-body sm:text-center">© {new Date().getFullYear()} Roavai. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-body hover:text-heading">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-body hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://youtube.com/@roavai_social?si=-y_z8HVRNj9ZMlVC" target="_blank" rel="noopener noreferrer" className="text-body hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.106C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.404.58A2.974 2.974 0 0 0 .502 6.186C0 8.13 0 12 0 12s0 3.87.502 5.814a2.974 2.974 0 0 0 2.094 2.106C4.53 20.5 12 20.5 12 20.5s7.47 0 9.404-.58a2.974 2.974 0 0 0 2.094-2.106C24 15.87 24 12 24 12s0-3.87-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" /></svg>

                                <span className="sr-only">Youtube</span>
                            </a>
                            <a href="https://x.com/_Roavai" target="_blank" rel="noopener noreferrer" className="text-body hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="https://www.linkedin.com/company/roavaipvtltd/about/" target="_blank" rel="noopener noreferrer" className="text-body hover:text-heading ms-5">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5H9.37V8.796h3.14ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" /><path d="M7.2 8.809H4V19.5h3.2V8.809Z" /></svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;