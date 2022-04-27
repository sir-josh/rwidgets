import React, { useState } from 'react'

const Dropdown = ({options, selected, onSelectChange}) => {
    const [open, setOpen] = useState(false);
    const dropdownLabel = 'Select a color';

    const renderOptions = options.map(option=>{
        return(
            <div 
                className={`item ${option.value === selected.value ? 'selected active': null}` }
                key={option.value}
                onClick={()=>onSelectChange(option)} 
            >
                {option.label}
            </div>
        );
    });
    
  return (
    <div className='ui form'>
        <div className='field'>
            <label className='label'>{dropdownLabel}</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div className={`menu ${open ? 'visible transition': ''}`}>
                    {renderOptions}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dropdown