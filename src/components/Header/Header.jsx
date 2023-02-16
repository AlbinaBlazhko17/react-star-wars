import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import Favourite from '../Favourite';

import imgDroid from './img/droid.svg';
import imgLight from './img/lightsaber.svg';
import imgSpace from './img/space-station.svg';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgSpace);
    const isTheme = useTheme();

    useEffect(() => {
        switch(isTheme.theme){
            case THEME_LIGHT: setIcon(imgLight); break;
            case THEME_DARK: setIcon(imgSpace); break;
            case THEME_NEUTRAL: setIcon(imgDroid); break;
            default: setIcon(imgSpace);
        }
    }, [isTheme])
    
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Star wars' />
            <ul className={styles.list__container}>
                <li> <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')} end>Home</NavLink> </li>
                <li> <NavLink to="/people?page=1">People</NavLink></li>
                <li> <NavLink to="/search">Search</NavLink></li>
                <li> <NavLink to="/error">Error</NavLink></li>
            </ul>
            <Favourite/>
        </div >
    );
}

export default Header; 