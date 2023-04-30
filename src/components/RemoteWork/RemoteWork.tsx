import React from 'react';
import styles from './RemoteWork.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Title from "../../common/components/Title";
import styleButton from '../../common/styles/Button.module.scss'


const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={`${styles.remoteWorkContainer} ${styleContainer.container}`}>
                {/*<h4>Considering remote work options</h4>*/}
                <Title title={'Considering remote work options'} fontSize={25}/>
                <button className={styleButton.button}>Hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;