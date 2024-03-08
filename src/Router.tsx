import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login/Page";
import CategoryPage from "./pages/App/Category/Page";
import DetailsPage from "./pages/App/Category/Details/Page";
import LandingPage from "./pages/Landing/Page";
import HomePage from "./pages/App/Home/Page";
import LayoutApp from "./pages/App/LayoutApp";
import LayoutCategory from "./pages/App/Category/LayoutCategory";
import ROUTES_APP from "./constants/route.constans";
import PrivateRoute from "./components/PrivatedRoute";

const router = createBrowserRouter([
    {
        path: ROUTES_APP.LANDING,
        element: <LandingPage />,
    },
    {
        path: ROUTES_APP.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTES_APP.APP.INDEX,
        element: <PrivateRoute> <LayoutApp /> </PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: `${ROUTES_APP.APP.CATEGORY.INDEX}/:categoryId`,
                element: <LayoutCategory />,
                children: [
                    {
                        index: true,
                        element: <CategoryPage />
                    },
                    {
                        path: `${ROUTES_APP.APP.CATEGORY.DETAILS}/:contentId`,
                        element: <DetailsPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
