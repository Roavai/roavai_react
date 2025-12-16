function Contact() {

    return (
        <section
            id="contact"
            className="bg-black py-20 text-white">
            <div className="mx-auto max-w-4xl px-4 py-4">
                {/* Title */}
                <h2 className="mb-10 text-center text-4xl font-extrabold tracking-wide md:text-5xl">
                    Contact Us
                </h2>

                <form className="space-y-6">
                    {/* Name + Email row */}
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

                    {/* Message */}
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

                    {/* Submit button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="rounded-md bg-red-600 px-10 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-red-500 active:bg-red-700"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
