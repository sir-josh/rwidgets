import React, { useState } from 'react';

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