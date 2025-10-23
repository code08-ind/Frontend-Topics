// Build a custom hook that observes when an element enters or leaves the viewport.

// To not call in infinitely between the renders
const options = useMemo(() => ({
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}), []);

import { useState, useEffect, useMemo } from "react";

// Here we will be passing a ref and options
const useIntersectionObserver = (ref, options) => {
    const [intersectionEntry, setIsIntersectionEntry] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersectionEntry(entry);
        }, options);

        if (ref.current && typeof IntersectionObserver === 'function') {
            observer.observe(ref.current);

            return () => {
                observer.unobserve(ref.current);
                setIsIntersectionEntry(null);
            }
        }
    }, [ref, options]);

    // now we can get isIntersecting, intersectionRatio from intersectionEntry.
    return intersectionEntry;
}

export default useIntersectionObserver;
