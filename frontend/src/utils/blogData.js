const modules = import.meta.glob('../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
})

function simpleMarkdownToHtml(md) {
    const lines = md.split('\n')
    const html = []
    let inList = false

    for (const rawLine of lines) {
        const line = rawLine.trim()
        if (!line) {
            if (inList) {
                html.push('</ul>')
                inList = false
            }
            continue
        }

        if (line.startsWith('### ')) { html.push(`<h3>${line.slice(4)}</h3>`); continue }
        if (line.startsWith('## ')) { html.push(`<h2>${line.slice(3)}</h2>`); continue }
        if (line.startsWith('# ')) { html.push(`<h1>${line.slice(2)}</h1>`); continue }

        if (line.startsWith('- ')) {
            if (!inList) { html.push('<ul>'); inList = true }
            html.push(`<li>${line.slice(2)}</li>`)
            continue
        }

        html.push(`<p>${line}</p>`)
    }
    if (inList) html.push('</ul>')
    return html.join('\n')
}

function parsePost(raw, filePath) {
    const match = /^---\n([\s\S]+?)\n---\n([\s\S]*)$/m.exec(raw)
    let front = {}
    let body = raw

    if (match) {
        const [, fm, content] = match
        body = content.trim()
        fm.split('\n').forEach((line) => {
            const [key, ...rest] = line.split(':')
            if (!key) return
            front[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '')
        })
    }

    const slug = filePath.split('/').pop().replace(/\.md$/, '')

    return {
        slug,
        title: front.title || slug,
        tileTitle: front.tileTitle || front.title || slug,
        date: front.date || '',
        summary: front.summary || '',
        image: front.image || '',   // e.g. "/blog/offline-ai.jpg"
        author: front.author || 'RoaVAI Team',
        location: front.location || 'San Francisco',
        content: body, // Raw markdown for react-markdown
        html: simpleMarkdownToHtml(body), // Fallback/Legacy
    }
}

export const posts = Object.entries(modules)
    .map(([path, raw]) => parsePost(raw, path))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
