import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter } from 'bad-words'
import { useReserve } from '../context/ReserveContext'

export default function ReserveModal() {
    const { isOpen, selectedProduct, closeReserveModal } = useReserve()

    const [product, setProduct] = useState(selectedProduct || 'Wini Desktop Robot')
    const [role, setRole] = useState('Parent for My Child')
    const [childAge, setChildAge] = useState('6-9 yrs')
    const [status, setStatus] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Sorry, something went wrong while submitting your reservation. Please try again.')

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct)
        }
    }, [selectedProduct])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeReserveModal()
            }
        }
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, closeReserveModal])

    if (!isOpen) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === 'loading') return

        const form = e.target
        const payload = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            product: product || selectedProduct || 'Wini Desktop Robot',
            role,
            childAge: role === 'Parent for My Child' ? childAge : 'N/A',
            notes: form.notes.value.trim(),
        }

        const filter = new Filter()
        if (filter.isProfane(payload.name) || filter.isProfane(payload.notes)) {
            setStatus('error')
            setErrorMessage('Please maintain professional language.')
            setShowError(true)
            return
        }

        if (!payload.name || !payload.email) return

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(payload.email)) {
            setStatus('error')
            setErrorMessage('Please enter a valid email address.')
            setShowError(true)
            return
        }

        try {
            setStatus('loading')

            const res = await fetch('/api/reserve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error('Reservation request failed')

            setStatus('success')
            form.reset()
            setShowSuccess(true)

            setTimeout(() => {
                setShowSuccess(false)
                closeReserveModal()
                setStatus(null)
            }, 4000)
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
        <AnimatePresence>
            <div
                onClick={closeReserveModal}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto select-none"
            >
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="reserve-modal-title"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 shadow-2xl text-white my-auto overflow-hidden"
                >
                    {/* Dot Matrix Pattern — matches Section 4 */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:2.5rem_2.5rem] pointer-events-none z-0" aria-hidden="true" />
                    {/* Film Grain Texture Overlay — matches Section 4 */}
                    <div className="absolute inset-0 opacity-[0.14] bg-[url('/noise.svg')] brightness-105 contrast-125 mix-blend-overlay pointer-events-none z-0" aria-hidden="true" />
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            closeReserveModal()
                        }}
                        aria-label="Close reservation modal"
                        className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-md"
                    >
                        <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Header */}
                    <div className="text-center mb-6 pt-2 relative z-10">
                        <h2 id="reserve-modal-title" className="font-primary text-xl sm:text-2xl font-extrabold tracking-widest uppercase text-white">
                            PRE-ORDER & RESERVATION
                        </h2>
                    </div>

                    {/* Form */}
                    <div className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                    Full Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Jane Doe"
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition"
                                />
                            </div>

                            <div>
                                <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                    Email Address <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="jane@example.com"
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition"
                                />
                            </div>
                        </div>

                        {/* Phone & Role Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                    Phone / WhatsApp <span className="text-white/40">(Optional)</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition"
                                />
                            </div>

                            <div>
                                <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                    Who is this for?
                                </label>
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition cursor-pointer"
                                >
                                    <option value="Parent for My Child" className="bg-zinc-900 text-white">Parent for My Child</option>
                                    <option value="Educator / School" className="bg-zinc-900 text-white">Educator / School</option>
                                    <option value="Investor / Partner" className="bg-zinc-900 text-white">Investor / Partner</option>
                                </select>
                            </div>
                        </div>

                        {/* Child Age Selector (Visible if Parent) */}
                        {role === 'Parent for My Child' && (
                            <div>
                                <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                    Child&apos;s Age Group
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['3-5 yrs', '6-9 yrs', '10-14 yrs'].map((age) => (
                                        <button
                                            type="button"
                                            key={age}
                                            onClick={() => setChildAge(age)}
                                            className={`py-2 px-3 rounded-lg border text-xs font-sans font-medium transition-all cursor-pointer ${childAge === age
                                                    ? 'border-white bg-white/10 text-white'
                                                    : 'border-zinc-800 bg-zinc-900/60 text-white/60 hover:border-zinc-700 hover:text-white'
                                                }`}
                                        >
                                            {age}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Notes */}
                        <div>
                            <label className="font-primary mb-1.5 block text-xs font-medium text-white/90">
                                Notes or Questions <span className="text-white/40">(Optional)</span>
                            </label>
                            <textarea
                                name="notes"
                                rows={2}
                                placeholder="Any specific learning needs or questions?"
                                className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-primary font-bold text-sm tracking-wider uppercase shadow-lg transition-all cursor-pointer disabled:opacity-60"
                            >
                                {status === 'loading' ? 'Submitting Reservation...' : 'Confirm Reservation Spot'}
                            </button>
                        </div>
                    </form>
                    </div>

                    {/* Success Modal Notification */}
                    {showSuccess && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-[#0a0a0a]/98 p-6 text-center backdrop-blur-sm">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:2.5rem_2.5rem] pointer-events-none rounded-3xl" />
                            <div className="max-w-sm relative z-10">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/20">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 font-primary text-xl font-bold tracking-wider text-white uppercase">
                                    RESERVATION CONFIRMED
                                </h3>
                                <p className="mb-6 text-sm text-white/80 leading-relaxed font-sans">
                                    Thank you! Your pre-order reservation for <span className="font-bold text-white">{product || 'ROAVAI Product'}</span> has been received. We will notify you first when production units ship.
                                </p>
                                <button
                                    onClick={() => {
                                        setShowSuccess(false)
                                        closeReserveModal()
                                    }}
                                    className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-zinc-200 transition cursor-pointer"
                                >
                                    Close Window
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Error Notification */}
                    {showError && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-[#0a0a0a]/98 p-6 text-center backdrop-blur-sm">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:2.5rem_2.5rem] pointer-events-none rounded-3xl" />
                            <div className="max-w-sm relative z-10">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/20">
                                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M12 3.75l8.25 16.5H3.75L12 3.75z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 font-primary text-xl font-bold tracking-wider text-white uppercase">
                                    SUBMISSION FAILED
                                </h3>
                                <p className="mb-6 text-sm text-white/80 font-sans">
                                    {errorMessage}
                                </p>
                                <button
                                    onClick={() => setShowError(false)}
                                    className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-primary font-bold text-xs uppercase tracking-wider shadow-md hover:bg-zinc-200 transition cursor-pointer"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
