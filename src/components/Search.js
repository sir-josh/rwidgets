import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');

    return (
        <div className='ui form'>
            <div className='field'>
                <label>Enter search term</label>
                <input 
                    type='text' 
                    className='input-text' 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;