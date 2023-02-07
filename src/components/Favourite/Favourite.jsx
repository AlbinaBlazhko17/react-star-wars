import icon from './img/bookmark.svg';

import styles from './Favourite.module.css';

const Favourite = () => {
    return (
        <div>
            <img className={styles.icon} src={icon} alt="Favorites" />
        </div>
    );
}

export default Favourite;