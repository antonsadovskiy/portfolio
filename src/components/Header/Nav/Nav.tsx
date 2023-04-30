import React from 'react';
import style from './Nav.module.scss'
import styleContainer from '../../../common/styles/Container.module.css'


const Nav = () => {
    return (
        <div className={`${styleContainer.container} ${style.nav}`}>
            <div className={style.navContainer}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
        </div>
    );
};

export default Nav;