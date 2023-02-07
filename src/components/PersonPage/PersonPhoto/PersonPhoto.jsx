import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPersonToFavourite, removePersonFromFavourite} from '@store/actions';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personId, personPhoto, personName, personFavourite, setPersonFavourite}) => {
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addPersonToFavourite(
            {
                id: personId,
                name: personName,
                img: personPhoto
            }
        ));
        setPersonFavourite(true);
    }

    const remove = () => {
        dispatch(removePersonFromFavourite(personId));
        setPersonFavourite(false);
    }

    return (
        <>
            <div className={styles.container}>
                <img 
                    src={personPhoto}
                    alt={personName}
                    className={styles.photo} />
            </div>
            {personFavourite 
                    ?  <button onClick={remove}>Delete from favourite</button>
                    :  <button onClick={add}>Add to favourite</button>}
        </>
    );
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavourite: PropTypes.bool,
    setPersonFavourite: PropTypes.func

}

export default PersonPhoto;