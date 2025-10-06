// useEffect: It is used to perform side effects in functional components such as data fetching, subscriptions, or manually changing the DOM.

// It has dependency array which tells when to run the useEffect. If we pass empty array, it will run only once when the component is mounted. If we pass a state variable in the array, it will run every time that state variable changes. If we don't pass anything, it will run after every render of the component.

// We also have the cleanup function which is used to clean up the side effects. It is similar to componentWillUnmount in class components. It is called when the component is unmounted or before the effect is re-run that is when the dependencies change.

// Explain useLayoutEffect and how it is different from useEffect.
// - useLayoutEffect is similar to useEffect, but it is synchronous and runs after all DOM mutations. This means that useLayoutEffect is called after the DOM has been updated but before the browser has painted the changes. This is useful for cases where you need to measure the DOM or make changes that should happen before the browser repaints. useLayoutEffect can block the painting of the browser, which can lead to performance issues if not used carefully. In contrast, useEffect is asynchronous and does not block the painting of the browser, making it more suitable for most side effects that do not require immediate DOM updates. It is called before the render cycle completes. useEffect is async in nature and is better when considering the performance of the application.

// Polyfill for useEffect
const useEffectPolyfill = (effect, deps) => {
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    // first render case
    if (isFirstRender.current) {
        isFirstRender.current = false;
        const cleanup = effect();
        if (typeof cleanup === 'function' && cleanup) {
            cleanup();
        }
        return;
    }

    // what happen id dependency array is not passed or dependencies change
    const hasNoDeps = !deps;
    const hasChangedDeps = deps && deps.some((dep, index) => dep !== prevDeps.current[index]);
    if (hasNoDeps || hasChangedDeps) {
        const cleanup = effect();
        if (typeof cleanup === 'function' && cleanup && !hasNoDeps) {
            cleanup();
        }
    }

    // store previous dependencies
    prevDeps.current = deps || [];
}