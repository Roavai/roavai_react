function GradientBackground() {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: 'radial-gradient(circle at 50% 0%, #0f0f15 0%, #010101 75%)',
            }}
        />
    )
}

export default GradientBackground
