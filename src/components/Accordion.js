import React, { Fragment, useState } from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const itemClick = (index) => {
        setActiveIndex(index);
    }

    const renderedList = items.map((item, i) =>{
        const active = i === activeIndex ? 'active': '';

        return <Fragment key={`accordion ${i}`}>
                    <div className={`title ${active}`} onClick={() => itemClick(i)}>
                        {item.title}
                        <i className='dropdown icon'></i>
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </Fragment>
    });

  return (
    <Fragment>
         <div className='ui styled accordion'>
            {renderedList}
        </div>
    </Fragment>
  );

}

export default Accordion;