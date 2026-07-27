export default function PageLoader() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span className="text-xs font-primary tracking-[0.25em] text-white/50 uppercase">
                    Loading
                </span>
            </div>
        </div>
    )
}
