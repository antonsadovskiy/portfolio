import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import me from '../../assets/images/me.jpg'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am Anton Sadovskiy</h1>
                    <p>Front-end React Developer</p>
                </div>
                <div className={styles.photoBlock}>
                    <div className={styles.photo}>
                        <img src={me} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;