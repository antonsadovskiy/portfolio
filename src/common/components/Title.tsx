import React, {FC} from 'react';
import styles from './Title.module.css';

type TitlePropsType = {
    title: string
}

const Title:FC<TitlePropsType> = ({title}) => {
    return (
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;