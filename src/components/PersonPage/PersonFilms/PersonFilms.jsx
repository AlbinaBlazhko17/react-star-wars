import { PropTypes } from 'prop-types';
import styles from './PersonFilms.module.css';

const PersonFilms = ({ personFilms }) => {
    console.log(personFilms);
    return (
        <></>
    );
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;