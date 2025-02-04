import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    },
    {
        path: "/news",
        element: <h1>news</h1>
    },
    {
        path: "/auth",
        element: <h1>Auth</h1>
    },
]) 

export default Routes