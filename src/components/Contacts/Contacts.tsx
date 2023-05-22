import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Title from "../../common/components/Title";
import styleButton from '../../common/styles/Button.module.scss'

const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contactBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={styles.contactForm}>
                    <input type="text" placeholder={'Your Name'}/>
                    <input type="text" placeholder={'Your E-mail'}/>
                    <textarea placeholder={'Type your message'}/>
                    <button type='submit' className={styleButton.button}>send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;