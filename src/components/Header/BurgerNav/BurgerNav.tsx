import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import burger from '../../../assets/images/burger.png'
import cross from '../../../assets/images/cross.png'
import {motion} from "framer-motion";

const BurgerNav = () => {

    const [toggle, setToggle] = useState(false)

    const changeToggle = () => setToggle(!toggle)

    const burgerStyle = toggle
        ? style.burgerNavItems + " " + style.show
        : style.burgerNavItems

    return (
        <div className={style.burgerNav}>
            <div className={burgerStyle}>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                >
                    Main
                </Link>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                >
                    Skills
                </Link>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                >
                    Projects
                </Link>
                <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                >
                    Contacts
                </Link>
            </div>
            <div className={style.burgerButton} onClick={changeToggle}>
                {
                    toggle
                        ? <motion.img whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} src={cross} width={'25px'}
                                      height={'25px'} alt=""/>
                        : <motion.img whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} src={burger} width={'30px'}
                                      height={'30px'} alt=""/>
                }
            </div>
        </div>
    );
};

export default BurgerNav;