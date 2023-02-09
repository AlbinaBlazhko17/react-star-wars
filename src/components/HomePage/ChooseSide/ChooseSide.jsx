import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgNeutralSide from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    text,
    img,
    theme
}) => {
    const isTheme = useTheme();
    return (
        <div className={classNames(styles.item, classes)} onClick={() => isTheme.change(theme)}>
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}


ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,
}

const ChooseSide = () => {
    
    return (
        <div className={styles.container}>
            <ChooseSideItem
                theme={THEME_LIGHT}
                text='Ligth Side'
                img={imgLightSide}
                classes={styles.item__light}/>
            <ChooseSideItem
                theme={THEME_DARK}
                text='Dark Side'
                img={imgDarkSide}
                classes={styles.item__dark}/>
            <ChooseSideItem
                theme={THEME_NEUTRAL}
                text='I`m Han Solo'
                img={imgNeutralSide}
                classes={styles.item__neutral}/>
        </div>
    );
}



export default ChooseSide;