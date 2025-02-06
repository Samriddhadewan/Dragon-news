import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import CategoryData from "../Components/CategoryData"
import AuthLayout from "../Layouts/AuthLayout"
import LoginPage from "../Components/LoginPage"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [ 
            {
              path: "",
              element: <Navigate to={"category/01"} />

            },
            {
            path: "category/:id",
            element: <CategoryData></CategoryData>,
            loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
    ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path:"/auth/login",
                element: <LoginPage></LoginPage>
            },
            {
                path:"/auth/register",
                element: <h1>Register</h1>
            },
        ]
    },
]) 

export default Routes