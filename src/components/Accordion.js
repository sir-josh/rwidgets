import React, { Fragment } from 'react';

const Accordion = ({items}) => {
    const renderedList = items.map((item, i) =>{
        return <Fragment key={`accordion ${i}`}>
                    <div className='title active'>
                        {item.title}
                        <i className='dropdown icon'></i>
                    </div>
                    <div className='content active'>
                        <p>{item.content}</p>
                    </div>
                </Fragment>
    });

  return <div className='ui styled accordion'>{renderedList}</div>

}

export default Accordion;