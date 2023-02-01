import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import styles from './UiButton.module.css';

const UiButton = ({text,
     onClick,
     disabled,
     theme="dark",
     classes
}) => {
    return (
        <button 
            onClick={onClick} 
            className={classNames(styles.button, styles[theme], classes) }
            disabled={disabled}>{text}</button>
    );
}

UiButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton;