
export default function GlowBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none z-0">
            {/* 
              Replicating the "Grok" / x.ai look (Static Version):
              - A massive bright light source on the right.
              - "Plasma" distortion effects.
              - Deep contrast (Black vs Bright Blue/White).
            */}

            {/* 1. Main Background Ambience (Deep Dark Blue) */}
            <div className="absolute inset-0 bg-black" />

            {/* 2. The "Plasma" Glows (Static) */}
            <div className="absolute inset-0 opacity-80 mix-blend-screen">

                {/* Primary White-Hot Core (Right Side) */}
                <div
                    className="absolute top-1/2 right-[-10%] w-[50vw] h-[80vh] bg-white/40 rounded-full blur-[120px]"
                    style={{ transform: "translateY(-50%)" }}
                />

                {/* Cyan Aura pulsating around the core */}
                <div
                    className="absolute top-1/3 right-[10%] w-[60vw] h-[60vw] bg-cyan-500 rounded-full blur-[150px] opacity-60"
                />

                {/* Secondary Deep Blue Drift (Bottom Right) */}
                <div
                    className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[50vh] bg-cyan-300 rounded-full blur-[100px] opacity-60"
                />

                {/* "Smoky" interference layer (Middle) */}
                <div
                    className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] bg-indigo-900 rounded-full blur-[120px] mix-blend-overlay opacity-80"
                />
            </div>

            {/* 3. Subtle Grain/Noise for texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
        </div>
    )
}
