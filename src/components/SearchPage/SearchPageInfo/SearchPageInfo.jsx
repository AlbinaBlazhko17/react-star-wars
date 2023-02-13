import { PropTypes } from 'prop-types';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ people }) => (
        <>
            {console.log(people.length)}
            {people.length
                ? ( 
                    <ul>
                        {people.map(({ id, name, img }) => 
                            <li key={id}>
                                <img src={img} alt={name} />
                                <p>{name}</p>
                            </li>
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