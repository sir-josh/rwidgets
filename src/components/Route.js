import { useEffect, useState } from "react";

const Route = ({ path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        // Set the currentPath to url changed that was changed to. The main function of this is -
        // to change the state and cause the component to rerender with appropiate navigation -
        //  page or as in this case appropiate children of the link tag to show. 
        const onPathnameChange = () => {
            setCurrentPath(window.location.pathname);
        }

        // Listen for navEvent popstate changes (url changes) and call "onPathnameChange()"
        window.addEventListener('popstate', onPathnameChange); 

        return () => {
            window.removeEventListener('popstate', onPathnameChange);
        }
        //es-lint-disable-next-line
    },[]);

    // return window.location.pathname === path ? children: null; or use the next-line to escape react warnings
    return currentPath === path ? children : null;
}

export default Route;