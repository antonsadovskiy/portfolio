import React from 'react';
import styles from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import githubIcon from '../../assets/images/footerContacts/github-icon.png'
import telegramIcon from '../../assets/images/footerContacts/telegram-icon.png'
import linkedInIcon from '../../assets/images/footerContacts/linkedin-icon.png'
import emailIcon from '../../assets/images/footerContacts/email-icon.png'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Sadovskiy Anton</h2>
                <div className={styles.feedbackContainer}>
                    <a href={'https://t.me/antonnchik'} target={'_blank'}>
                        <div className={styles.feedbackIcon}>
                            <img src={telegramIcon} alt=""/>
                        </div>
                    </a>
                    <a href={'https://www.linkedin.com/in/anton-sadovskiy-ba8b13242'} target={'_blank'}>
                        <div className={styles.feedbackIcon}>
                            <img src={linkedInIcon} alt="linkedIn"/>
                        </div>
                    </a>
                    <a href={'mailto:antonsadovskiy6@gmail.com'} target={'_blank'}>
                        <div className={styles.feedbackIcon}>
                            <img src={emailIcon} alt=""/>
                        </div>
                    </a>
                    <a href={'https://github.com/antonsadovskiy'} target={'_blank'}>
                        <div className={styles.feedbackIcon}>
                            <img src={githubIcon} alt=""/>
                        </div>
                    </a>
                </div>
                <h2 className={styles.rights}>© 2021 All rights reserved</h2>
            </div>
        </div>
    );
};

export default Footer;