// src/components/BlogCarousel.jsx
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { posts as allPosts } from '../utils/blogData'

const AUTOPLAY_MS = 10000
const easing = [0.16, 1, 0.3, 1]

function BlogCarousel() {
    // Only use the latest 5 posts for the carousel
    const posts = allPosts.slice(0, 5)

    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')

    const len = posts.length || 0

    const goTo = useCallback((index) => {
        if (!len) return
        setActiveIndex(((index % len) + len) % len)
    }, [len])

    const next = useCallback(() => {
        if (!len) return
        setActiveIndex((prev) => ((prev + 1) % len + len) % len)
    }, [len])

    const prev = useCallback((() => {
        if (!len) return
        setActiveIndex((prev) => ((prev - 1) % len + len) % len)
    }), [len])

    // Stable autoplay: depends only on len and isHovered
    useEffect(() => {
        // On mobile, isHovered is ignored/always false effectively if we gate the setter
        // But to be safe, we can also check isDesktop in the dependency or condition
        if ((isDesktop && isHovered) || len <= 1) return
        const id = setInterval(next, AUTOPLAY_MS)
        return () => clearInterval(id)
    }, [isHovered, len, isDesktop, next])

    if (!len) return null

    const post = posts[activeIndex]

    return (
        <section className="py-24 text-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4">
                {/* Centered heading */}
                <div className="mb-10 text-center">
                    <h2 className="font-orbitron text-3xl md:text-2xl font-extrabold tracking-[0.25em] mb-3">
                        STORIES
                    </h2>
                </div>

                {/* Carousel */}
                <div
                    className="relative h-[430px] md:h-[500px] flex items-center justify-center"
                    onMouseEnter={() => isDesktop && setIsHovered(true)}
                    onMouseLeave={() => isDesktop && setIsHovered(false)}
                >
                    {/* --- DESKTOP: Side Arrows (Hidden on Mobile) --- */}
                    <button
                        onClick={prev}
                        className="hidden md:flex cursor-pointer absolute left-6 z-40 p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={next}
                        className="hidden md:flex cursor-pointer absolute right-6 z-40 p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>

                    {/* --- MAIN CONTENT: Image Tile (Restored) --- */}
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: -40 }}
                                transition={{ duration: 0.8, ease: easing }}
                                className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_40px_80px_rgba(0,0,0,0.6)] bg-zinc-900/80"
                            >
                                {/* Background image */}
                                {post.image && (
                                    <motion.img
                                        key={`bg-${post.slug}`}
                                        src={post.image}
                                        alt={post.tileTitle}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        initial={{ scale: 1.08 }}
                                        animate={{ scale: 1.02 }}
                                        transition={{ duration: 1.4, ease: easing }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between px-6 py-6 md:px-10 md:py-10">
                                    <div className="space-y-3 max-w-xl">
                                        <motion.h3
                                            key={`title-${post.slug}`}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
                                            className="font-orbitron tracking-wider text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                                        >
                                            {post.title}
                                        </motion.h3>

                                        <motion.p
                                            key={`summary-${post.slug}`}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 30 }}
                                            transition={{ duration: 0.7, ease: easing, delay: 0.3 }}
                                            className="font-orbitron tracking-wider text-sm md:text-base text-zinc-200 max-w-xl"
                                        >
                                            {post.summary}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        key={`cta-${post.slug}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: easing, delay: 0.45 }}
                                        className="mt-6 flex justify-center md:justify-start"
                                    >
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="font-orbitron explore-button justify-center"
                                        >
                                            Read article
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- MOBILE: Unified Controls (Arrows + Dots) --- */}
                    <div className="md:hidden absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 w-full px-4 z-40">
                        <button
                            onClick={prev}
                            className="flex items-center justify-center p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <div className="flex gap-3">
                            {posts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`h-2 w-2 rounded-full transition-all duration-500 ${i === activeIndex
                                        ? 'w-8 bg-white'
                                        : 'bg-zinc-700 hover:bg-zinc-500'
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="flex items-center justify-center p-3 text-white/70 hover:text-white active:scale-95 transition bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    {/* --- DESKTOP: Dots Only (Hidden on Mobile) --- */}
                    <div className="hidden md:flex absolute -bottom-10 left-1/2 -translate-x-1/2 gap-3">
                        {posts.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`h-2 w-2 rounded-full transition-all duration-500 ${i === activeIndex
                                    ? 'w-8 bg-white'
                                    : 'bg-zinc-700 hover:bg-zinc-500'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Explore button */}
                    <div className="absolute -bottom-25 md:-bottom-12 w-full left-0 text-center md:w-auto md:left-auto md:right-1 md:text-right">
                        <Link
                            to="/blog"
                            className="font-orbitron tracking-widest nav-link-cursor text-white text-xs"
                        >
                            <span className="md:hidden">Explore more stories →</span>
                            <span className="hidden md:inline">Explore more stories →</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogCarousel
