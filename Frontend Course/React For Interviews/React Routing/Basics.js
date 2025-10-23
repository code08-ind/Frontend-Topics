// React Router DOM

// Installation
// npm install react-router-dom

// We have a newer way to have a router, instead of us using the BrowserRouter, we can use createBrowserRouter.

// If we want a layout, then we can use children object inside this to have a layout and can provide the routes inside that layout for the components to be rendered inside that layout and we will use the Outlet component to render those components inside that layout.
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        element: <AboutLayout />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);

const AboutLayout = () => {
    return (
        <div>
            <h1>About Layout</h1>
            <Outlet />
        </div>
    );
};

// For navigation, we can use the Link component from react-router-dom. Behind the scenes, it uses the anchor tag but it prevents the default behaviour of the anchor tag and does a client-side navigation instead of a server-side navigation.

// NavLink is similar to Link but it adds an active class to the link when it is active. We can also provide a function to the className prop to conditionally add classes based on whether the link is active or not.

// NavLink also provides us with certain props like isActive, isPending, isTransitioning etc. which we can use to conditionally style the link. isActive is used to check if the link is active or not. isPending is used to check if the link is in a pending state or not. isTransitioning is used to check if the link is in a transitioning state or not and we are transitioning when we are navigating from one route to another. We can provide the className here easily out here.

// Instead of normally showing the data on load of the second page, we can use the loader function to load the data before the component is rendered. This is useful when we want to show a loading spinner or a skeleton screen while the data is being loaded. The loader function returns a promise which resolves to the data that we want to load. We can access this data in the component using the useLoaderData hook from react-router-dom.

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useLoaderData,
    useNavigation
} from "react-router-dom";

const router1 = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        element: <AboutLayout />,
        children: [
            {
                path: "/about",
                element: <About />,
                loader: async () => {
                    return fetch("https://jsonplaceholder.typicode.com/posts");
                },
            },
        ],
    },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(
    <React.StrictMode>
        <RouterProvider router={router1}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);

const About = () => {
    const posts = useLoaderData();
    const isLoading = useNavigation().state === "loading";

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>About</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

// useNavigate Hook is used to navigate programmatically. It returns a function that we can use to navigate to a different route. We can also pass state to the route that we are navigating to. Such as useNavigate(-1) will take us to the previous page. useNavigate(1) will take us to the next page. We can also pass an object to the navigate function with the pathname and state properties.

// Start From 01:00 Mins.

