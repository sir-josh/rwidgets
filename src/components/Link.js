import React, { useEffect } from 'react';

const Link = ({href, className, children}) => {
    const onNavClick = event => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        //Setup an event to tell each navigation link (on Route component) to listen for when the URL changes
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onNavClick} href={href} className={className}>{children}</a >
    );
}

export default Link;