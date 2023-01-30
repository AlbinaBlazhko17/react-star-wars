import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li> <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Home</NavLink> </li>
                <li> <NavLink to="/people">People</NavLink></li>
            </ul>
        </div >


    );
}

// Header.propTypes = {
//     people: PropTypes.array
// }

export default Header;