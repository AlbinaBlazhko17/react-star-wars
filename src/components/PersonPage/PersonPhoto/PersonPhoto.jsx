import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPersonToFavourite, removePersonFromFavourite} from '@store/actions';

import iconFavourite from './img/favorite.svg'
import iconFavouriteFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personId, personPhoto, personName, personFavourite, setPersonFavourite}) => {
    const dispatch = useDispatch();

    const dispatchFavouritePeople = () => {
        if (personFavourite) {
            dispatch(removePersonFromFavourite(personId));
            setPersonFavourite(false);
        } else {
            dispatch(addPersonToFavourite(
                {
                    id: personId,
                    name: personName,
                    img: personPhoto
                }
            ));
            setPersonFavourite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img 
                    src={personPhoto}
                    alt={personName}
                    className={styles.photo} />
                <img
                    src={personFavourite ? iconFavouriteFill :iconFavourite}
                    onClick={dispatchFavouritePeople}
                    className={styles.favourite}
                    alt="Add to favourite" />
            </div>
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