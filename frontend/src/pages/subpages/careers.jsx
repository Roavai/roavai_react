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
                    {/* Left column */}
                    <section>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-[0.25em] mb-4 font-orbitron">
                            OUR OPEN
                            <br />
                            ROLES
                        </h1>
                        <p className="mb-8 max-w-sm text-sm md:text-base text-gray-300 font-orbitron">
                            Join the RoaVAI team to help build the future of robotics and home AI.
                        </p>

                        <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 mb-2 uppercase font-orbitron">
                            Or contact us with
                        </p>
                        <a
                            href="mailto:sachinmc@roavai.com"
                            className="text-sm md:text-base font-semibold text-orange-400 underline underline-offset-4 font-orbitron"
                        >
                            info@roavai.com
                        </a>
                    </section>

                    {/* Right column – roles list from JSON */}
                    <section className="space-y-6">
                        {loading && (
                            <p className="text-sm text-gray-400">Loading roles…</p>
                        )}

                        {error && !loading && (
                            <p className="text-sm text-red-400">
                                {error}
                            </p>
                        )}

                        {!loading && !error && roles.length === 0 && (
                            <p className="text-sm text-gray-400">
                                There are no open roles right now. Check back soon.
                            </p>
                        )}

                        {!loading &&
                            !error &&
                            roles.map((role) => (
                                <div
                                    key={role.id}
                                    className="flex flex-col gap-4 border-b border-zinc-800 pb-6 last:border-b-0"
                                >
                                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between cursor-pointer" onClick={() => toggleRole(role.id)}>
                                        <div>
                                            <p className="text-[11px] font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-1 font-orbitron">
                                                Open roles
                                            </p>
                                            <h2 className="text-xl md:text-2xl font-semibold text-white font-orbitron">
                                                {role.title}
                                            </h2>

                                            <div className="mt-2 flex tracking-widest flex-wrap gap-2 text-xs text-gray-400 font-orbitron">
                                                <span>{role.type}</span>
                                                <span className="mx-1">•</span>
                                                <span>{role.range}</span>
                                                <span className="mx-1">•</span>
                                                <span>{role.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    toggleRole(role.id)
                                                }}
                                                className={`pointer-events-none group flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 text-white transition-all duration-300 hover:border-white hover:bg-zinc-800 active:scale-95 ${expandedRole === role.id ? 'rotate-180 bg-zinc-800 border-zinc-600' : ''}`}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </button>

                                            <a
                                                href={role.applyUrl}
                                                className="explore-button"
                                                onClick={(e) => e.stopPropagation()} // Prevent toggling when clicking apply
                                            >
                                                Submit application
                                            </a>
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expandedRole === role.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                        <div className="overflow-hidden">
                                            <div className="pt-2 text-gray-300 font-orbitron tracking-widest text-sm md:text-base space-y-4">
                                                <p>{role.description}</p>
                                                {role.requirements && (
                                                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                                                        {role.requirements.map((req, i) => (
                                                            <li key={i}>{req}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Careers
