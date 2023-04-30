import React, {FC} from 'react';
import styles from './Title.module.scss';

type TitlePropsType = {
    title: string
    fontSize?: number
}

const Title:FC<TitlePropsType> = ({title,fontSize}) => {
    return (
        <div className={styles.title}>
            <h2 style={{fontSize: `${fontSize}px`}}>{title}</h2>
        </div>
    );
};

export default Title;