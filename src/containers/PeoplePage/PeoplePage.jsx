import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        };
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [])

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}

        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);