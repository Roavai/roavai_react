import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function BlogPostCard({ post }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [timer, setTimer] = useState(null)

    const handleMouseEnter = () => {
        const t = setTimeout(() => {
            setIsExpanded(true)
        }, 500)
        setTimer(t)
    }

    const handleMouseLeave = () => {
        if (timer) clearTimeout(timer)
        setIsExpanded(false)
    }

    return (
        <motion.div
            className="group block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                scale: isExpanded ? 1.15 : 1,
                zIndex: isExpanded ? 50 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Link to={`/blog/${post.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 mb-5">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.tileTitle}
                            className={`h-full w-full object-cover transition-transform duration-700 ease-out-quint ${isExpanded ? 'scale-110' : 'scale-100'}`}
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-zinc-900">
                            <span className="text-zinc-700 text-4xl">●</span>
                        </div>
                    )}

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${isExpanded ? 'bg-black/10' : ''}`} />
                </div>

                {/* Content */}
                <div className={`space-y-3 bg-black/80 backdrop-blur-sm p-4 -mx-4 rounded-xl transition-all duration-500 ${isExpanded ? 'bg-zinc-900/90 shadow-2xl ring-1 ring-white/10' : ''}`}>
                    <div className="flex items-center justify-between text-[11px] font-medium tracking-wider uppercase text-zinc-500">
                        <span>{post.date}</span>
                        <span className={`text-zinc-600 transition-colors ${isExpanded ? 'text-white' : ''}`}>Read Article →</span>
                    </div>

                    <h3 className={`text-xl font-bold leading-tight text-white transition-colors ${isExpanded ? 'text-red-500' : ''}`}>
                        {post.title}
                    </h3>

                    <p className={`text-sm text-zinc-400 leading-relaxed transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
                        {post.summary}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
}
