import React, {FC} from 'react';
import styles from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import githubIcon from '../../assets/images/footer-icons/github-icon.png'
import telegramIcon from '../../assets/images/footer-icons/telegram-icon.png'
import linkedInIcon from '../../assets/images/footer-icons/linkedin-icon.png'
import emailIcon from '../../assets/images/footer-icons/email-icon.png'
import Title from "../../common/components/Title";

type IconPropsType = {
    href: string
    icon: string
    alt: string
}

const Icon: FC<IconPropsType> = ({href, icon, alt}) => {
    return (
        <a href={href} target={'_blank'}>
            <div className={styles.feedbackIcon}>
                <img src={icon} alt={alt}/>
            </div>
        </a>
    )
}

const Footer = () => {

    const media: IconPropsType[] = [
        {href: 'https://t.me/antonnchik', icon: telegramIcon, alt: 'telegram'},
        {href: 'https://www.linkedin.com/in/anton-sadovskiy-ba8b13242', icon: linkedInIcon, alt: 'linkedin'},
        {href: 'mailto:antonsadovskiy6@gmail.com', icon: emailIcon, alt: 'email'},
        {href: 'https://github.com/antonsadovskiy', icon: githubIcon, alt: 'github'},
    ]

    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <Title title={'You can find me here'} fontSize={25}/>
                <div className={styles.feedbackContainer}>
                    {media.map((i, index) => <Icon key={index} icon={i.icon} href={i.href} alt={i.alt}/>)}
                </div>
                <h2 className={styles.rights}>© 2023 All rights reserved</h2>
            </div>
        </div>
    );
};

export default Footer;