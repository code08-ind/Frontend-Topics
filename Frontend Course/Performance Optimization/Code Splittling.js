// Code Splitting is a technique used in web development to break down large JavaScript bundles into smaller, more manageable pieces that can be loaded on demand. This helps improve the performance of web applications by reducing the initial load time and allowing users to download only the code they need for the current view or functionality.

// We bundle up our code by making use of tools like Webpack, Rollup, or Parcel. These bundlers analyze the dependency graph of our application and create optimized bundles for deployment.

// Code Splitting can be achieved through various methods such as:
// 1. Dynamic Imports: Using the import() function to load modules asynchronously when they are needed.
// 2. Route-based Splitting: Dividing code based on application routes so that only the code required for a specific route is loaded.
// 3. Component-level Splitting: Breaking down large components into smaller ones and loading them as needed.

// For components, we can use React.lazy and Suspense to implement code splitting in React applications. React.lazy allows us to define a component that is loaded dynamically, while Suspense provides a fallback UI (like a loading spinner) while the component is being loaded. They work in combination to each other to enable code splitting at the component level.

// We can use the same thing when we are using the Components in the routes. We cannot provide This Lazy to whole of the RouterProvider but we can provide it to each individual route component as if there is an error component, so it is rendered correctly. This way, each route component is loaded only when the user navigates to that route, improving the initial load time of the application.

// Once a page needs to be loaded, then only the page will be loaded and not the entire application. This improves the performance of the application significantly, especially for large applications with many routes and components.

// 