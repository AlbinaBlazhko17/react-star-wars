import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

import styles from './Favourite.module.css';

const Favourite = () => {
    return (
        <div className={styles.container}>
            <Link to="/favourites">
                <span className={styles.counter}>0</span>
                <img className={styles.icon} src={icon} alt="Favorites" />
            </Link>
            
        </div>
    );
}

export default Favourite;