import { PropTypes } from 'prop-types';
import ChooseSide from '@components/HomePage/ChooseSide';

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <h1 className='header__text'>Home page</h1>
            <ChooseSide/>
        </>
    );
}

// HomePage.propTypes = {
//     people: PropTypes.array
// }

export default HomePage;