import { useEffect } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonPage = ({ match}) => {
    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}/`);
        })();
    }, [])
    return (
        <></>
    );
}

export default PersonPage;