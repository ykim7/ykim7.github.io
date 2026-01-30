import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import HomeLayout from "../layout/HomeLayout";

import Home from "../pages/Home";
import About from "../pages/About";
// import Resume from "../pages/Resume";
// import BlogList from "../pages/Blog/BlogList";
// import BlogPost from "../pages/Blog/BlogPost";

export const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [{ path: "/", element: <Home /> }],
    },

    {
        element: <RootLayout />,
        children: [
            { path: "/about", element: <About /> },
            //   { path: "/resume", element: <Resume /> },
            //   { path: "/blog", element: <BlogList /> },
            //   { path: "/blog/:lang/:slug", element: <BlogPost /> },
        ],
    },
]);
