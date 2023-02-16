import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg, getPeopleDataId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';
// import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';

const PeopleList = React.lazy(() => import('@components/PeoplePage/PeopleList'));


const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);
    // const [boxShadow, setBoxShadow] = useState('');

    // const isTheme = useTheme();

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);
                return { 
                    id,
                    name,
                    img,
                };
            });
    
            setPeople(peopleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeopleDataId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        };
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [])

    // useEffect(() => {
    //     switch(isTheme.theme){
    //         case THEME_LIGHT: setBoxShadow(`.list__item__${isTheme.theme}`); break;
    //         case THEME_DARK: setBoxShadow(imgSpace); break;
    //         case THEME_NEUTRAL: setBoxShadow(imgDroid); break;
    //         default: setBoxShadow(imgSpace);
    //     }
    // }, [isTheme])


    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}/>
            {people && <PeopleList people={people}/>}

        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);