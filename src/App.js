import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    },
];

const dropdownLabel = 'Select a color';

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className='ui container' style={{ marginTop: '15px' }}>
            {/* <Accordion items={items} /> */}
            <Dropdown 
                selected={selected}
                onSelectChange={setSelected}
                options={options}
                topLabel={dropdownLabel}
            />
        </div>
    )
}

export default App;