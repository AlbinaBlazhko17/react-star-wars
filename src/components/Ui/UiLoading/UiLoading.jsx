import Spinner from './img/Spinner.svg';
import styles from './UiLoading.module.css';

const UiLoading = () => {
    return (
        <img 
          className={styles.spinner}
          src={Spinner}
          alt="Spinner" />
    );
}

export default UiLoading;