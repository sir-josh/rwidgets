import React from 'react';
import Accordion from './components/Accordion';

const App = () => {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is a favourite javascript library among engineers'
        },
        {
            title: 'How do you use React?',
            content: 'You use react by creating useable components'
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default App;