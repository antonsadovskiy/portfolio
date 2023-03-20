import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <h1>I am Anton Sadovskiy</h1>
                    <p>Front-end React Developer</p>
                </div>
                <div className={styles.photo}>
                    {/*<img src={me} alt=""/>*/}
                </div>
            </div>
        </div>
    );
};

export default Main;