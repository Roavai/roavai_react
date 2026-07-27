import { useState } from 'react'
import { Filter } from 'bad-words'

// const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000' For local

function Contact() {
    const [status, setStatus] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Sorry, something went wrong while sending your message. Please check your connection and try again.')


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === 'loading') return

        const form = e.target
        const payload = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        }

        const filter = new Filter()
        if (filter.isProfane(payload.message) || filter.isProfane(payload.name)) {
            setStatus('error')
            setErrorMessage('Please maintain professional language.')
            setShowError(true)
            return
        }

        if (!payload.name || !payload.email || !payload.message) return
        if (payload.name.length > 25 || payload.message.length > 1000) return

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(payload.email)) {
            setStatus('error')
            setShowError(true)
            return
        }


        try {
            setStatus('loading')

            // const res = await fetch(`${API_BASE}/api/contact`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(payload),
            // }) For local

            const res = await fetch(`/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error('Request failed')

            setStatus('success')
            form.reset()
            setShowSuccess(true)

            setTimeout(() => {
                setShowSuccess(false)
            }, 5000)
        } catch (err) {
            console.error(err)
            setStatus('error')
            setShowError(true)

            setTimeout(() => {
                setShowError(false)
            }, 5000)
        }
    }

    return (
        <section className="pt-24 md:pt-28 pb-20 text-white">
            <div className="mx-auto max-w-4xl px-4 py-4">
                <h2 className="font-primary mb-10 text-center text-4xl font-extrabold tracking-widest md:text-5xl">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="font-primary mb-2 block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-white focus:bg-zinc-900 focus:ring-1 focus:ring-white"
                            />
                        </div>

                        <div>
                            <label className="font-primary mb-2 block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-white focus:bg-zinc-900 focus:ring-1 focus:ring-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-primary mb-2 block text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={7}
                            required
                            className="w-full resize-none rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-white focus:bg-zinc-900 focus:ring-1 focus:ring-white"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="font-primary explore-button cursor-pointer disabled:opacity-60"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send message'}
                        </button>
                    </div>

                    {/* {status === 'success' && (
                        <p className="pt-2 text-center text-sm text-green-400">
                            Message sent. Thank you!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="pt-2 text-center text-sm text-red-400">
                            Something went wrong. Please try again.
                        </p>
                    )} */}
                </form>

                {showSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <div className="mx-4 max-w-sm rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 text-center shadow-2xl">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                                <svg
                                    className="h-7 w-7 text-emerald-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.7"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </div>

                            <h3 className="mb-2 text-lg font-semibold tracking-[0.16em] text-white">
                                MESSAGE SENT
                            </h3>
                            <p className="mb-5 text-sm text-gray-300">
                                Thank you for reaching out to RoavAI. Wini&apos;s team will get back to you soon.
                            </p>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="font-primary explore-button w-full cursor-pointer px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}


                {showError && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <div className="mx-4 max-w-sm rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 text-center shadow-2xl">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15">
                                <svg
                                    className="h-7 w-7 text-red-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.7"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v4m0 4h.01M12 3.75l8.25 16.5H3.75L12 3.75z"
                                    />
                                </svg>
                            </div>

                            <h3 className="mb-2 text-lg font-semibold tracking-[0.16em] text-white">
                                MESSAGE NOT SENT
                            </h3>
                            <p className="mb-5 text-sm text-gray-300">
                                {errorMessage}
                            </p>

                            <button
                                onClick={() => setShowError(false)}
                                className="font-primary explore-button w-full cursor-pointer px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </section>
    )
}

export default Contact
