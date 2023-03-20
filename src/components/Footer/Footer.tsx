import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Sadovskiy Anton</h2>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedbackIcon}>

                    </div>
                    <div className={styles.feedbackIcon}>

                    </div>
                    <div className={styles.feedbackIcon}>

                    </div>
                    <div className={styles.feedbackIcon}>

                    </div>
                </div>
                <h2>2023 all rights reserved</h2>
            </div>
        </div>
    );
};

export default Footer;