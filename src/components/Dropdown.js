import React from 'react'

const Dropdown = ({options}) => {
    const dropdownLabel = 'Select a color';

    const renderOptions = options.map(option=>{
        return(
            <div className='item' key={option.value}>
                {option.label}
            </div>
        );
    });
    
  return (
    <div className='ui form'>
        <div className='field'>
            <label className='label'>{dropdownLabel}</label>
            <div className='ui selection dropdown visible active'>
                <i className='dropdown icon'></i>
                <div className='text'>{dropdownLabel}</div>
                <div className='menu visible transition'>
                    {renderOptions}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dropdown