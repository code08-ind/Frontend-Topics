// Build a custom hook that delays updating a value until after a specified delay period has passed after the last change.

import { useState, useEffect } from "react";

// While using this hook, ensure to pass a stable callback function (e.g., using useCallback) to avoid unnecessary re-renders and also if we want to perform an API call, we can make use of it easily.
const useDebounce = (value, delay, callback) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            callback();
        }, delay)

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;
