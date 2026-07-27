import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import careersImage from "../../assets/Images/Explore_1.jpeg";
import teamImage from "../../assets/Images/explore4.jpg";

// Content constants
const ABOUT_TEXT = "ROAVAI is building foundational robotics and AI systems that are accessible, adaptive and human-centric.";



export default function Explore() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen text-white relative overflow-hidden rounded-2xl bg-black"
    >
      {/* Main Content */}
      <div className="relative z-10 font-primary">

        {/* EXPLORE HERO INTRO */}
        <section className="w-full bg-black pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-primary text-4xl md:text-6xl font-bold mb-5"
            >
              About Us
            </motion.h1>
          </div>

          {/* FULL WIDTH IMAGE WITH ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-0 md:mt-20 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]"
          >
            {/* ABOUT TEXT - Mobile: above image */}
            <p className="md:hidden text-white text-base leading-relaxed font-light px-7 pt-0 pb-8 text-center">
              {ABOUT_TEXT}
            </p>

            <div className="relative px-4 md:px-16">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] md:aspect-auto md:h-[520px]">

                <img
                  src={teamImage}
                  alt="ROAVAI Team collaborating on robotics projects"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl md:rounded-none"
                />

                {/* GRADIENT OVERLAY for text visibility */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />

                {/* ABOUT TEXT - Desktop overlay (centered in top half) */}
                <div className="hidden md:flex absolute inset-0 h-1/2 items-center justify-center pointer-events-none">
                  <p className="text-white text-2xl leading-relaxed font-light text-center max-w-4xl px-12 drop-shadow-lg [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
                    {ABOUT_TEXT}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </section>


        {/* OUR STORY */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32">
          <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto">

            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-14">
              Our Story
            </h2>

            <div className="space-y-6 md:space-y-8 text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p>
                We are a bunch of passionate individuals who strongly believe in the power of technology to make the world a better place.
              </p>

              <p>
                ROAVAI began with a simple but ambitious belief — that robotics and AI should exist to elevate human potential and create a future of abundance for all.
              </p>

              <p>
                Just like how smartphones and the internet transformed access to information and software services,
                robotics and AI will transform access to physical labor and intelligence.
              </p>

              <p>
                Our work is driven by this vision and we are constantly working on making this future a reality.
              </p>
            </div>

          </div>
        </section>


        {/* OUR MISSION */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32">
          <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto">

            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-14">
              Our Mission
            </h2>

            <div className="space-y-6 md:space-y-8 text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p>
                To build robotics and AI systems
                that are deeply beneficial and integrate naturally into everyday life.
              </p>

              <p>
                We focus on first-principles engineering, careful iteration, and
                human-centered design — ensuring that intelligence is deployed
                responsibly and transparently.
              </p>

              <p>
                By making robotics accessible, trustworthy, and adaptive, we aim to
                expand access to knowledge, assistance, and opportunity for everyone.
              </p>

              <p>
                Ultimate goal of ROAVAI is to elevate the human experience and enable us to explore the universe to its fullest potential.
              </p>
            </div>

          </div>
        </section>


        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-32 relative">
          <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-start">

            <div>
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
                The Technology
              </h2>

              <p className="text-white/60 text-lg md:text-xl lg:text-2xl leading-relaxed">
                While we build products that are applicable to the real world and accessible to everyone,
                we also engineer the technology that powers them.
              </p>
            </div>

            <div className="relative" role="list" aria-label="Technology features">

              {/* Vertical line */}
              <div className="absolute left-[9px] top-0 bottom-0 w-px bg-white/20" aria-hidden="true" />

              <ul className="space-y-12 md:space-y-16">
                <li className="relative pl-12">
                  <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                    Built for the Real World
                  </h3>
                  <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed">
                    Our products are created to function seamlessly in real-world environments.
                  </p>
                </li>

                <li className="relative pl-12">
                  <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                    Engineered from the Core
                  </h3>
                  <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed">
                    Behind every product, we engineer the foundational technologies that make them possible.
                  </p>
                </li>

                <li className="relative pl-12">
                  <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                    Flexible and Scalable
                  </h3>
                  <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed">
                    We build technology that is flexible and scalable to meet dynamic needs and grow with changing needs.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </div>

      <section className="px-4 md:px-20 py-22" aria-labelledby="careers-heading">
        <div className="max-w-6xl mx-auto">

          <article className="flex flex-col md:flex-row overflow-hidden rounded-2xl">

            {/* LEFT IMAGE */}
            <div className="md:w-1/2">
              <img
                src={careersImage}
                alt="Team members collaborating at ROAVAI office"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-1/2 bg-[#141414] text-white flex items-center">
              <div className="p-10 md:p-14">

                <h2 id="careers-heading" className="text-4xl md:text-5xl font-bold mb-6">
                  Join Us
                </h2>

                <p className="text-white/70 leading-relaxed mb-10">
                  We are constantly seeking passionate individuals who share our vision.
                  Whether you are an engineer, a designer, or a dreamer, there is a place
                  for you at ROAVAI to help build the future of robotics and AI.
                </p>

                <Link
                  to="/careers"
                  className="font-primary explore-button inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest cursor-pointer"
                >
                  Careers
                </Link>

              </div>
            </div>

          </article>
        </div>
      </section>



    </motion.div>
  );
}

