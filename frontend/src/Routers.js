import {createBrowserRouter} from "react-router-dom"
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import FAQ from "./Pages/FAQ";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/404";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddFunder from "./Pages/Admin/Organziation/AddFunder";
import SeeFunder from "./Pages/Admin/Organziation/SeeFunder";
import SeeSuggestions from "./Pages/Admin/Organziation/SeeSuggestions";
import AddEvent from "./Pages/Admin/Event/AddEvent";
import SeeEvent from "./Pages/Admin/Event/SeeEvent";
import Volunteers from "./Pages/Admin/Volunteers";
import Protected from "./Layouts/Protected";
import News from "./Pages/News";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/events",
        element: <Events/>,
        errorElement: <Error/>
    },
    {
        path: "/faq",
        element: <FAQ/>,
        errorElement: <Error/>
    },
    {
        path: "about",
        element: <AboutUs/>,
        errorElement: <Error/>
    },
    {
        path: "admin",
        element:<Admin/>,
        errorElement: <Error/>
    },
    {
        path: "news",
        element: <News />,
        errorElement: <Error />
    },
    {
        path: "*",
        element: <NotFound/>,
        errorElement: <Error/>
    },
    {
        path:"/admin/dashboard",
        element:<Protected><AdminDashboard/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/funder/add",
        element:<Protected><AddFunder/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/funder/see",
        element:<Protected><SeeFunder/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/funder/suggestion",
        element:<Protected><SeeSuggestions/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/event/add",
        element:<Protected><AddEvent/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/event/see",
        element:<Protected><SeeEvent/></Protected>,
        errorElement:<Error/>
    },
    {
        path:"/admin/dashboard/volunteer",
        element:<Protected><Volunteers/></Protected>,
        errorElement:<Error/>
    }
])