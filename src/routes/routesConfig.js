import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavouritePage from "@components/FavouritePage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '/favourites',
        element: <FavouritePage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
];

export default routesConfig;