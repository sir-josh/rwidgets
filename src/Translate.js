import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Convert from './components/Convert';

const languageOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    },{
        label: 'Arabic',
        value: 'ar'
    },{
        label: 'Hindi',
        value: 'hi'
    },{
        label: 'French',
        value: 'fr'
    },{
        label: 'German',
        value: 'de'
    },{
        label: 'Chinese(Simplified)',
        value: 'zh-CN'
    },{
        label: 'Yoruba',
        value: 'yo'
    },{
        label: 'Spanish',
        value: 'es'
    },{
        label: 'Igbo',
        value: 'ig'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(languageOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form' style={{ marginBottom: '10px'}}>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                options={languageOptions}
                selected={language}
                onSelectChange={setLanguage}
                topLabel="Choose Language Option"
            />
            <hr style={{ marginTop: '30px'}} />
            <h3>Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
}

export default Translate;