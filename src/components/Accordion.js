import React, { Fragment, useState } from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const itemClick = (index) => {
        setActiveIndex(index);
    }

    const renderedList = items.map((item, i) =>{
        return <Fragment key={`accordion ${i}`}>
                    <div className='title active' onClick={() => itemClick(i)}>
                        {item.title}
                        <i className='dropdown icon'></i>
                    </div>
                    <div className='content active'>
                        <p>{item.content}</p>
                    </div>
                </Fragment>
    });

  return (
    <Fragment>
         <div className='ui styled accordion'>
            {renderedList}
        </div>
        <h1>Active Accordion is the accordion-{activeIndex}</h1>
    </Fragment>
  );

}

export default Accordion;