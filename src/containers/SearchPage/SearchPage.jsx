import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import styles from './SearchPage.module.css';


const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param);

        if(res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    const handleInputChange = e => {
        const value = e.target.value;
        setInputSearchValue(value);
        getResponse(value)
    }

    return (
        <>
            <h1 className='header__text'>Search</h1>
            <input
             type="text"
             value={inputSearchValue} 
             onChange={handleInputChange}
             placeholder='Input character`s name '/>
        </>
    );
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);