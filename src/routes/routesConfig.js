import React from "react";
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavouritePage from "@components/FavouritePage";
import SearchPage from "@containers/SearchPage";


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
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
];

export default routesConfig;