// Client Side Rendering vs Server Side Rendering

// Client Side Rendering (CSR):

// In CSR, the entire application is rendered on the client side using JavaScript.

// In CSR, we have rich interactions, reduced server load, and better client-side caching.

// But in CSR, we have certain cons as well such as Slower Initial Load, Bad for SEO, Dependency on the user's device.

// Solution to CSR is Server Side Rendering (SSR).

// Server Side Rendering (SSR):

// In SSR, the application is rendered on the server side and the fully rendered HTML is sent to the client.

// In SSR, we have faster initial load, better SEO, and improved performance on low-end devices.

// But in SSR, we have certain cons as well such as Increased Server Load, Limited Interactivity, frequent server requests which can increase latency and Complexity in Implementation.

// Earlier for SSR, we used to use Server React DOM APIs. But then came Next.js which is a React framework that enables server-side rendering and static site generation for React applications.

// SSR becomes necessary when we have to improve SEO, enhance performance on low-end devices, and reduce the time to first meaningful paint such as in Ecommerce websites, News websites, Blogs, Marketing websites.

// Creating Initial or Entry page with SSR is beneficial as it improves SEO, reduces time to first meaningful paint, and enhances user experience by providing a fully rendered page quickly and then the other pages can be loaded using CSR by using the Single Page Application (SPA) approach.