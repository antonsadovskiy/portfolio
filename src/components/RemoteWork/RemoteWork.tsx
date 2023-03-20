import React from 'react';
import styles from './RemoteWork.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={`${styles.remoteWorkContainer} ${styleContainer.container}`}>
                <h4>Considering remote work options</h4>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;