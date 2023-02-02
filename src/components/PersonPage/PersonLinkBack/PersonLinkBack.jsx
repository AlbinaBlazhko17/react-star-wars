import { useNavigate } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12C1.75 12.1989 1.82902 12.3897 1.96967 12.5303L8.96967 19.5303C9.26256 19.8232 9.73744 19.8232 10.0303 19.5303C10.3232 19.2374 10.3232 18.7626 10.0303 18.4697L4.31066 12.75L21.5 12.75C21.9142 12.75 22.25 12.4142 22.25 12C22.25 11.5858 21.9142 11.25 21.5 11.25L4.31066 11.25L10.0303 5.53033C10.3232 5.23744 10.3232 4.76256 10.0303 4.46967C9.73744 4.17678 9.26256 4.17678 8.96967 4.46967L1.96967 11.4697C1.82902 11.6103 1.75 11.8011 1.75 12Z" fill="yellow"/>
            </svg>
            <span className={styles.text}>Go back</span>
        </a>
    );
}

export default PersonLinkBack;