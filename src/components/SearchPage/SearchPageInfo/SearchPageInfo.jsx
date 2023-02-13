import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ people }) => (
        <>
            {console.log(people.length)}
            {people.length
                ? ( 
                    <ul>
                        {people.map(({ id, name, img }) => 
                            <Link to={`/people/${id}`}>
                                <li key={id}>
                                    <img src={img} alt={name} />
                                    <p>{name}</p>
                                </li>
                            </Link>
                        )}
                    </ul>
                )
                : <h2>No results</h2> 
            }
    
        </>
);

SearchPageInfo.propTypes = {
    people: PropTypes.array
}

export default SearchPageInfo;