import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }

    }, [term]);

    useEffect(()=>{
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

    }, [debouncedTerm]);    

    const renderedResult = results.map(result => {
        const regex = /(<([^>]+)>)|(&quot;)/gi //NEW
        const cleanSnippet = result.snippet.replace(regex, ""); //NEW 
        // {result.snippet} was replaced with {cleanSnippet}

        return(
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                       className='ui button'
                       href={`https://en.wikipedia.org?curid=${result.pageid}`}
                       target="_blank"
                       rel="noreferrer"
                    >
                        Go
                    </a>
                </div>
                <div className='content' style={{ paddingTop: '15px', paddingBottom: '15px'}}>
                    <div className='header' style={{ marginBottom: '8px'}}> {result.title}</div> 
                    {/* <span dangerouslySetInnerHTML={{__html:result.snippet}}></span> */}
                    {cleanSnippet}
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