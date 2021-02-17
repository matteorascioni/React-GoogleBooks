import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    // NAVBAR TRANSITION ANIMATION
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    // HISTORY REACT-ROUTER
    const history = useHistory(false);

    return (
        <div className={`navbar ${show && 'navbar__blue'}`}>
            <div className="navbar__content">
                <img 
                    onClick={() => history.push('/')}
                    className="navbar__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" 
                    alt=""
                />

                <img 
                    onClick={() => history.push('/profile')}
                    className="navbar__avatar"
                    src="https://purepng.com/public/uploads/large/purepng.com-play-books-icon-android-lollipopsymbolsiconsgooglegoogle-iconsandroid-lollipoplollipop-iconsandroid-50-7215225972313gef0.png" alt=""
                />
            </div>    
        </div>
    )
}

export default NavBar;
