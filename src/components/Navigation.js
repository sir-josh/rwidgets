import React from 'react';
import Link from './Link';

const Navigation = () => {
  return (
    <div className='ui secondary pointing menu'>
        <Link href='/' className='item'>
            Accordion
        </Link>
        <Link href='/dropdown' className='item'>
            Dropdown
        </Link>
        <Link href='/search' className='item'>
            List
        </Link>
        <Link href='/translate' className='item'>
            Translate
        </Link>
    </div>
  )
}

export default Navigation;