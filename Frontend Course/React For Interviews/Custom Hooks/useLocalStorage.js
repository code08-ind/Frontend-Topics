// Build a custom hook that stores and retrieves data from Local Storage.

import { useState } from "react";
import { useEffect } from "react";

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
    // to check if we are in a browser environment
    if (!isBrowser) {
        return [initialValue, () => { }, () => { }];
    }

    // to check if key is provided
    if (!key) {
        throw new Error("Key is required for useLocalStorage");
    }

    // check if key is already present in local storage
    const storedValue = localStorage.getItem(key);

    // if present, parse it else use initial value
    const initialValue = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState(initialValue);

    const set = (newValue) => {
        try {
            // Check if newValue is a function
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage value:", error);
        }
    };

    const remove = () => {
        try {
            localStorage.removeItem(key);
            setValue(undefined);   
        } catch (error) {
            console.error("Error removing localStorage item:", error);
        }
    };

    return [value, set, remove];
}

export default useLocalStorage;
