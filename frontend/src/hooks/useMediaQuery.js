import { useState, useEffect } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);

        media.addEventListener("change", listener);

        // Ensure state is synced
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        return () => media.removeEventListener("change", listener);
    }, [query]); // matches removed from dependency array to prevent cycles

    return matches;
}
