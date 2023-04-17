import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={styles.contactBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;