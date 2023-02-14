import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import styles from './UiVideo.module.css';

const UiVideo = ({
     src,
     classes
}) => {
    return (
        <video className={classNames(styles.video, classes)}>
            <source src={src}/>
        </video>
    );
}

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string
}

export default UiVideo;