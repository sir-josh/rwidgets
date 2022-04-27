import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

const languageOptions = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const divLabel = 'Choose Language Option';

const Translate = () => {
    const [language, setLanguage] = useState(languageOptions[0]);

    return (
        <Dropdown 
            options={languageOptions}
            selected={language}
            onSelectChange={setLanguage}
            topLabel={divLabel}
        />
    );
}

export default Translate;