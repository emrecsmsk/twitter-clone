import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/main"
import Home from "../pages/home"
import Explore from "../pages/explore"
import Notifications from "../pages/notifications"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
        ]
    }
])

export default routes