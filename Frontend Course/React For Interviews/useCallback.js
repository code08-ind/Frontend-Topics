// What is useCallback hook?
// - useCallback is a hook in React that is used to optimize the performance of functional components by memoizing or caching a function definition. It is only called when one of its dependencies has changed, which helps to avoid unnecessary re-renders and improves the performance of the component. useCallback takes two arguments: a function to be memoized, and an array of dependencies that determine when the memoized function should be recalculated. It gives back the memoized function.
// - useCallback should be used when a function is passed as a prop to a child component and the function is defined inside the parent component. This is because, in React, functions are recreated on every render, which can cause unnecessary re-renders of child components that depend on those functions. By using useCallback, we can ensure that the same function reference is passed to the child component unless its dependencies change.

const { useRef, useEffect } = require("react");

// What happens if we pass empty dependency array to useCallback?
// - If we pass an empty dependency array to useCallback, the function will be memoized and will not be recreated on subsequent renders of the component and it will be useful for the performance optimization of the component. 

// When should you not use useMemo or useCallback?
// - For event handlers or inline functions that are not passed as props to child components as they are optimized by React itself.
// - Many unncessary uses of useMemo or useCallback can cause excessive memory consumption and can lead to performance degradation.
// - Memoized functions can stay for long and can lead to memory leaks if not used properly and effect the garbage collection.

function useMemoPoylfill(callback, deps) {
    // store the memoized value
    let memoizedValue = useRef();
    let lastDeps = useRef();

    // compare if the dependencies have changed
    if (!areDepsEqual(lastDeps.current, deps)) {
        memoizedValue.current = callback();
        lastDeps.current = deps;
    }

    // cleanup logic can be added here if required
    useEffect(() => {
        return () => {
            memoizedValue.current = null;
            lastDeps.current = null;
        }
    }, []);

    // return memoized value
    return memoizedValue.current;
}

function areDepsEqual(deps1, deps2) {
    if (deps1 === deps2) return true;

    if (!deps1 || !deps2 || deps1.length !== deps2.length) {
        return false;
    }

    for (let i = 0; i < deps1.length; i++) {
        if (deps1[i] !== deps2[i]) {
            return false;
        }
    }

    return true;
}