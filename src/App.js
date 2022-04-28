import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './Translate';
import Route from './components/Route';

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

const dropdownLabel = 'Select a Color';

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className='ui container' style={{ marginTop: '15px' }}>
            <Route path="/">
                <Accordion items={items} /> 
            </Route>
            <Route path="/translate">
                <Translate items={items} /> 
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} topLabel={dropdownLabel} selected={selected} onSelectChange={setSelected} /> 
            </Route>
            <Route path="/search">
                <Search  /> 
            </Route>
        </div>
    )
}

export default App;