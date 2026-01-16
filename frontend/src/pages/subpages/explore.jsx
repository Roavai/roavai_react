
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import FeatureCard from "../subpages/FeatureCard";
import img2 from "../../assets/images/feature_voice_v1.png";
import img3 from "../../assets/images/Explore_1.jpeg";
import img4 from "../../assets/images/explore4.jpg";
// import bgImage from "../../assets/images/dark_bg.png";



export default function Explore() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen text-white relative overflow-hidden rounded-2xl" 
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}

      {/* Content */}
      <div className="relative z-10 font-orbitron"> 

{/* EXPLORE HERO INTRO */}
<section className="w-full bg-black pt-32 pb-24">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-orbitron text-4xl md:text-6xl font-bold mb-5"
    >
      About ROAVAI
    </motion.h1>

  </div>

  {/* FULL WIDTH IMAGE */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  className="mt-4 md:mt-20 w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]"
>
{/* MOBILE TEXT (ABOVE IMAGE) */}
<p className="block md:hidden text-white/100 text-base leading-relaxed font-light px-7 pt-5 pb-10 text-center">
  ROAVAI is building thoughtful, human-centric robotics and AI systems —
  designed to live alongside people, learn continuously, and create
  long-term value for society.
</p>

 <div className="relative px-4 md:px-16">
<div className="relative overflow-hidden rounded-2xl md:rounded-3xl md:h-[520px]">

  <img
    src={img4}
    alt="ROAVAI Team"
    className="
    w-full
    h-auto
    object-contain
    rounded-2xl
    md:rounded-none
    md:h-full
    md:object-cover
    "
  />

  {/* GRADIENTS */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

  {/* DESKTOP TEXT */}
  <div className="hidden md:flex absolute inset-0 items-start justify-end">
    <div className="md:max-w-4xl md:pr-20 md:pt-16 px-4">
      <p className="text-white/90 text-2xl leading-relaxed font-light">
        ROAVAI is building thoughtful, human-centric robotics and AI systems —
        designed to live alongside people, learn continuously, and create
        long-term value for society.
      </p>
    </div>
  </div>

</div>

  </div>
</motion.div>

</section>


{/* OUR STORY */}
<section className="px-6 py-15 md:py-32">
  <div className="max-w-3xl mx-auto">

    <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12">
      Our Story
    </h2>

    <div className="space-y-8 text-white/80 text-lg leading-relaxed">
      <p>
        ROAVAI began with a simple but ambitious belief — that robotics and AI
        should exist to elevate human potential, not replace it.
      </p>

      <p>
        From the beginning, we questioned why intelligent machines remained
        confined to labs, factories, or research papers, while everyday people
        interacted with technology that barely understood them.
      </p>

      <p>
        Just as smartphones transformed access to knowledge and information,
        we believe intelligent robots will become a personal, everyday
        technology — learning continuously and adapting to the people around
        them.
      </p>

      <p>
        ROAVAI was formed to explore that future thoughtfully, responsibly,
        and with a long-term perspective.
      </p>
    </div>

  </div>
</section>


{/* OUR MISSION */}
<section className="px-6 py-20 md:py-32">
  <div className="max-w-3xl mx-auto">

    <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12">
      Our Mission
    </h2>

    <div className="space-y-8 text-white/80 text-lg leading-relaxed">
      <p>
        Our mission is to build deeply beneficial robotics and AI systems
        that integrate naturally into everyday life.
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
    </div>

  </div>
</section>


        {/* FEATURES */}
    
{/* BRAND PROMISE / FEATURES */}
<section className="px-6 md:px-20 py-15 relative">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

    {/* LEFT SIDE */}
    <div>
      <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
        The Technology
      </h2>

      <p className="text-white/60 text-lg leading-relaxed max-w-md">
        We build robotics with intent — designed to be timely, personal,
        and scalable in the real world.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative">

      {/* Vertical line */}
      <div className="absolute left-[9px] top-0 bottom-0 w-px bg-white/20" />

      <ul className="space-y-16">
        {/* Item 1 */}
        <li className="relative pl-12">
          <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" />
          <h3 className="text-2xl font-semibold mb-2">
            Built for the Real World
          </h3>
          <p className="text-white/60 leading-relaxed">
            Our products are created to function seamlessly in real-world environments.
          </p>
        </li>

        {/* Item 2 */}
        <li className="relative pl-12">
          <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" />
          <h3 className="text-2xl font-semibold mb-2">
            Engineered from the Core
          </h3>
          <p className="text-white/60 leading-relaxed">
            Behind every product, we engineer the foundational technologies that make them possible.
          </p>
        </li>

        {/* Item 3 */}
        <li className="relative pl-12">
          <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-cyan-400" />
          <h3 className="text-2xl font-semibold mb-2">
            Technology at the Foundation
          </h3>
          <p className="text-white/60 leading-relaxed">
            Every experience is powered by deeply engineered core systems.
          </p>
        </li>
      </ul>
    </div>

  </div>
</section>
</div>

{/* JOIN THE JOURNEY */}
<section className="px-6 md:px-20 py-22">
  <div className="max-w-6xl mx-auto">
    
    {/* FLEX CONTAINER (THIS CONTROLS SIDE-BY-SIDE) */}
    <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl">

      {/* LEFT IMAGE */}
      <div className="md:w-1/2">
        <img
          src={img3}
          alt="Join the Journey"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT WHITE CONTENT */}
      <div className="md:w-1/2 bg-[#1c1c1c] text-white flex items-center">
        <div className="p-10 md:p-14">

          <p className="text-xs tracking-[0.3em] uppercase text-white-500 mb-4">
            Careers
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Journey
          </h2>

          <p className="text-white-700 leading-relaxed mb-10">
            We are constantly seeking passionate individuals who share our vision.
            Whether you are an engineer, a designer, or a dreamer, there is a place
            for you at ROAVAI to help build the future of robotics and AI.
          </p>

          <a
            href="/careers"
            className="inline-flex items-center explore-button gap-3 border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
          >
            View Careers
          </a>

        </div>
      </div>

    </div>
  </div>
</section>



    </motion.div>
  );
}

