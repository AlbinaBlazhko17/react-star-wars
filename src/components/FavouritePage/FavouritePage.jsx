import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavouritePage.module.css';

const FavouritePage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favourite);

    useEffect(() => {
        if(storeData.length) {
            setPeople(storeData);
        }
    }, [])
    
    return (
        <>
            <h1 className='header__text'>Favorites Page</h1>
            {people.length 
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data</h2>

            }
        </>
    );
}
export default FavouritePage;