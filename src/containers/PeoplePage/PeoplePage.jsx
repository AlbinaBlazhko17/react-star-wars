import { useState, useEffect } from 'react';
import { propTypes } from 'prop-types';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);

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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

        
    }
    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people} />}
        </>
    );
}

PeoplePage.propTypes = {
    people: propTypes.array
}

export default withErrorApi(PeoplePage);