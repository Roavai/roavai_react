// src/pages/Careers.jsx
import { useState } from 'react'
import { roles as rolesData } from '../../utils/careers'

// function Careers() {
// const [roles, setRoles] = useState(rolesData)
// ...

function Careers() {
    // We can just use the data directly, or put it in state if we plan to filter it later.
    // Simulating the "loading" state isn't strictly necessary for local data, but if we want to keep the UI structure:
    const [roles] = useState(rolesData)
    // removed loading state as data is instant
    const loading = false
    const error = null

    const [expandedRole, setExpandedRole] = useState(null)

    const toggleRole = (id) => {
        setExpandedRole(prev => prev === id ? null : id)
    }

    return (
        <main className="min-h-screen bg-black text-white py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-12 md:grid-cols-[1.1fr,2fr]">
                    {/* Main content */}
                    <section className="max-w-2xl">
                        {/* Main heading */}
                        <h1 className="text-3xl md:text-5xl text-white font-bold tracking-wide mb-6 leading-tight">
                            Like what we do?
                            <br />
                            <span className="text-gray-300">Join us.</span>
                        </h1>

                        {/* Intro paragraph */}
                        <p className="mb-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                            If you have a background in AI, Robotics, Machine Learning, Computer Vision, or related fields
                            and you're passionate about building the future of robotics and AI — connect with us.
                        </p>

                        {/* Internship section */}
                        <div className="mb-10 p-4 md:p-6 rounded-lg border border-gray-800 bg-gray-900/30">
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                Internship Opportunities
                            </h2>
                            <p className="mb-4 text-base text-gray-400">
                                We're currently offering internship for students in:
                            </p>
                            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300 text-base">
                                <li>Computer Science (CS)</li>
                                <li>Artificial Intelligence & Machine Learning (AI/ML)</li>
                                <li>Electronics and Communication Engineering (ECE)</li>
                                <li>Robotics, mechatronics and related branches</li>
                            </ul>

                            <h3 className="text-base md:text-lg font-semibold text-white mb-3">Internship Details</h3>
                            <p className="mb-4 text-base text-gray-400 leading-relaxed">
                                Our program offers students the opportunity to work on live projects from day one, tackling real-world challenges at the intersection of hardware and intelligent software systems. You will help push the boundaries of what robots can do.
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                <li>Duration: Minimum 4 Months</li>
                                <li>Mode: In-office (Full-time)</li>
                                <li>Location: BTM 1st Stage, Bangalore</li>
                                <li>Website: www.roavai.com</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-base md:text-lg text-gray-400">Apply Now</span>
                            <a
                                href="mailto:info@roavai.com,sachinmc@roavai.com,prathwi@roavai.com,parth@roavai.com"
                                className="font-opensans explore-button"
                            >
                                info@roavai.com
                            </a>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default Careers
