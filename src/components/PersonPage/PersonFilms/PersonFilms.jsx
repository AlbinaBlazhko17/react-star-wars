import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { makeConCurrentRequest } from '@utils/network'

import styles from './PersonFilms.module.css';


const PersonFilms = ({ personFilms }) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await makeConCurrentRequest(personFilms);

            setFilms(response);
        })();
    }, [])

    console.log(personFilms);
    return (
        <div>
            <ul>
                {films && films
                            .sort((a, b) => a.episode_id - b.episode_id)
                            .map(({title, episode_id}) => 
                            <li key={episode_id}>
                                <span>Episode {episode_id}</span>
                                <span> : </span>
                                <span>{title}</span>
                            </li>
                )}
            </ul>
        </div>
    );
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;