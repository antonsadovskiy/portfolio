import React from 'react';
import style from './Main.module.css'
import me from '../../assets/me.jpg'
import styleContainer from '../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi there</span>
                    <h1>I am Anton Sadovskiy</h1>
                    <p>Front-end React Developer</p>
                </div>
                <div className={style.photo}>
                    <img src={me} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;