import { useState } from 'react'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

function Contact() {
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === 'loading') return

        const form = e.target
        const payload = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        }

        if (!payload.name || !payload.email || !payload.message) return

        try {
            setStatus('loading')

            const res = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error('Request failed')

            setStatus('success')
            form.reset()
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="bg-black py-20 text-white">
            <div className="mx-auto max-w-4xl px-4 py-4">
                <h2 className="mb-10 text-center text-4xl font-extrabold tracking-wide md:text-5xl">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-red-500 focus:bg-zinc-900 focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-red-500 focus:bg-zinc-900 focus:ring-1 focus:ring-red-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={7}
                            required
                            className="w-full resize-none rounded-md border border-transparent bg-zinc-900 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-red-500 focus:bg-zinc-900 focus:ring-1 focus:ring-red-500"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="rounded-md bg-red-600 px-10 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-red-500 disabled:opacity-60"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send message'}
                        </button>
                    </div>

                    {status === 'success' && (
                        <p className="pt-2 text-center text-sm text-green-400">
                            Message sent. Thank you!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="pt-2 text-center text-sm text-red-400">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact
