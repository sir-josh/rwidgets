import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        }

        searchWiki();
    }, [term]);

    const renderedResult = results.map(result => {
        return(
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'> {result.title}</div>
                    {result.snippet}
                </div>
            </div>
        );
    });

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
            <div className='ui celled list'>{renderedResult}</div>
        </div>
    );
}

export default Search;