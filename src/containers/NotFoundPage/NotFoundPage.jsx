import { useLocation } from 'react-router';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();
    return (
        <>
            <div className={styles.number} title="404">404</div>
            <div className={styles.notfound}>Not match for {location.pathname} !</div>
        </>
    );
}

export default NotFoundPage;