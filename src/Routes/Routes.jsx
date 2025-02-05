import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import CategoryData from "../Components/CategoryData"

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
        path: "/news",
        element: <h1>news</h1>
    },
    {
        path: "/auth",
        element: <h1>Auth</h1>
    },
]) 

export default Routes