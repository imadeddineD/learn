import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../components/loading";
import Layout from "../Layout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",  // This will wrap all routes with Navbar and Footer
      element: <Layout />,  // Use Layout as the wrapper for these routes
      children: [
        { path: "/", element: <App /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "faq", element: <Question /> },
        { path: "courses", element: <Students /> },
        { path: "courses/:id", element: <CourseDetails /> },
      ]
    },
    {
      path: "/auth/register",  
      element: <Register />,  
    },
    {
      path: "/auth/login",  
      element: <Login />,  
    },
    // You can also add other routes outside the layout if needed
  ]);
}

const App = Loadable(lazy(() => import("../App")));
const Contact = Loadable(lazy(() => import("../components/contact/contact")));
const About = Loadable(lazy(() => import("../components/about/About")));
const Question = Loadable(lazy(() => import("../components/qestandres/Question")));
const Students = Loadable(lazy(() => import("../components/Students/Students")));
const Login = Loadable(lazy(() => import("../components/login/login")));
const Register = Loadable(lazy(() => import("../components/login/register")));
const CourseDetails = Loadable(lazy(() => import("../components/CourseDetails/CourseDetails")));
