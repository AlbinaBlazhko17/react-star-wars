import { PropTypes } from 'prop-types';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme();

    return (
        <>
            {isTheme.theme}
            <button onClick={() => isTheme.change(THEME_LIGHT)}>THEME_LIGHT</button>
            <button onClick={() => isTheme.change(THEME_DARK)}>THEME_DARK</button>
            <button onClick={() => isTheme.change(THEME_NEUTRAL)}>THEME_NEUTRAL</button>
        </>
    );
}

// ChooseSide.propTypes = {
//     people: PropTypes.array
// }

export default ChooseSide;