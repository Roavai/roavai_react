function GradientBackground() {
    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{
                background: 'radial-gradient(circle at bottom,#232325 0%, #000000 100%)',
                zIndex: 0
            }}
        />
    )
}

export default GradientBackground
