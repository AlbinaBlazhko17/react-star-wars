import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPersonToFavourite, removePersonFromFavourite} from '@store/actions';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName}) => {
    const dispatch = useDispatch();

    const add = () => {
        addPersonToFavourite();
    }

    const remove = () => {
        removePersonFromFavourite();
    }

    return (
        <>
            <div className={styles.container}>
                <img 
                    src={personPhoto}
                    alt={personName}
                    className={styles.photo} />
            </div>
            <button onClick={add}>Add to favourite</button>
            <button onClick={remove}>Delete from favourite</button>
        </>
    );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string
}

export default PersonPhoto;