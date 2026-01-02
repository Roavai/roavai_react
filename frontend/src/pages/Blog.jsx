// src/pages/Blog.jsx
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../utils/blogData'
import BlogPostCard from '../components/BlogPostCard'

function Blog() {
    // Use all posts
    const allPosts = posts

    // Group posts by full Date (YYYY-MM-DD)
    const groupedPosts = useMemo(() => {
        const groups = {}
        allPosts.forEach((post) => {
            const dateStr = post.date || 'Recent'
            if (!groups[dateStr]) {
                groups[dateStr] = []
            }
            groups[dateStr].push(post)
        })

        // Sort dates descending
        return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]))
    }, [allPosts])

    // Helper to format date string for header
    const formatDateHeader = (dateStr) => {
        if (dateStr === 'Recent') return { small: '', big: 'Recent' }
        const date = new Date(dateStr)
        if (isNaN(date.getTime())) return { small: '', big: dateStr }

        // Format: "01 Jan" "2026"
        const day = date.getDate().toString().padStart(2, '0')
        const month = date.toLocaleString('default', { month: 'short' })
        const year = date.getFullYear()

        return { small: `${day} ${month}`, big: year }
    }

    return (
        <main className="min-h-screen bg-black text-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <header className="mb-20 text-center">
                    <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold tracking-[0.2em] mb-6">
                        ARCHIVE
                    </h1>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
                        A collection of thoughts, updates, and stories from the RoaVAI labs.
                        Exploring the intersection of robotics, AI, and home living.
                    </p>
                </header>

                {/* Date Sections */}
                <div className="space-y-24">
                    {groupedPosts.map(([dateStr, datePosts]) => {
                        const { small, big } = formatDateHeader(dateStr)
                        return (
                            <section key={dateStr} className="relative">
                                {/* Sticky Header */}
                                <div className="flex items-end gap-3 mb-10">
                                    <span className="font-orbitron text-sm md:text-base text-zinc-500 font-medium tracking-[0.2em] mb-3 md:mb-5 uppercase">
                                        {small}
                                    </span>
                                    <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-zinc-800/50 select-none leading-none">
                                        {big}
                                    </h2>
                                    <div className="h-px flex-1 bg-zinc-800/50 mb-4 md:mb-6" />
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                    {datePosts.map((post) => (
                                        <BlogPostCard key={post.slug} post={post} />
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Blog
