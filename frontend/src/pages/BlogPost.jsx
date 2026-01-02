// src/pages/BlogPost.jsx
import ReactMarkdown from 'react-markdown'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../utils/blogData'
import BlogPostCard from '../components/BlogPostCard'

function BlogPost() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return (
            <main className="min-h-[calc(100vh-4rem)] bg-black text-white flex items-center justify-center">
                <p>Post not found.</p>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(-1)}
                    className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                    <span className="font-bold group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    Back
                </motion.button>

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14 text-center md:text-left"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs tracking-widest text-gray-500 font-medium mb-6 uppercase">
                        <span>{post.date}</span>
                        {post.author && (
                            <>
                                <span className="hidden md:inline text-zinc-700">•</span>
                                <span>{post.author}</span>
                            </>
                        )}
                        {post.location && (
                            <>
                                <span className="hidden md:inline text-zinc-700">•</span>
                                <span className="text-zinc-500">{post.location}</span>
                            </>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold tracking-tight leading-tight mb-8">
                        {post.title}
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {post.summary}
                    </p>
                </motion.header>

                {/* Hero Image */}
                {post.image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mb-16 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,0,0,0.1)] border border-zinc-900"
                    >
                        <img
                            src={post.image}
                            alt={post.tileTitle}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                    </motion.div>
                )}

                {/* Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="prose prose-invert max-w-none prose-lg 
                        prose-headings:font-orbitron prose-headings:tracking-wide prose-headings:font-bold prose-headings:text-white
                        prose-p:text-zinc-400 prose-p:leading-8
                        prose-a:text-red-500 prose-a:no-underline hover:prose-a:text-red-400 hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-bold
                        prose-blockquote:border-l-red-500/50 prose-blockquote:bg-zinc-900/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-zinc-300
                        prose-li:text-zinc-400 prose-li:marker:text-red-900"
                >
                    <ReactMarkdown
                        components={{
                            img: ({ node, ...props }) => (
                                <figure className="my-12">
                                    <img {...props} className="w-full h-auto rounded-xl border border-zinc-800 shadow-2xl" />
                                    {props.alt && (
                                        <figcaption className="mt-3 text-center text-xs text-zinc-600 tracking-wider uppercase">
                                            {props.alt}
                                        </figcaption>
                                    )}
                                </figure>
                            )
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </motion.article>

                {/* All Posts Section */}
                <section className="mt-32 pt-20 border-t border-zinc-800/50">
                    <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-12 text-center tracking-[0.2em] text-white">
                        LATEST POSTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {posts
                            .filter((p) => p.slug !== slug)
                            .map((p) => (
                                <BlogPostCard key={p.slug} post={p} />
                            ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default BlogPost
