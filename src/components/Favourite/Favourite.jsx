import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

import styles from './Favourite.module.css';

const Favourite = () => {
    const [count, setCount] = useState(null);
    const storeData = useSelector(state => state.favourite);

    useEffect(() => {
        setCount(storeData.length);
    });

    return (
        <div className={styles.container}>
            <Link to="/favourites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favorites" />
            </Link>
            
        </div>
    );
}

export default Favourite;