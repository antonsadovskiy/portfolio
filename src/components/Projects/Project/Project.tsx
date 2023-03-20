import React, {FC} from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    name: string
    desc: string
    img: string
}

const Project:FC<ProjectPropsType> = (props) => {

    return (
        <div className={styles.project}>
            <div className={styles.projectImage} >
                <button>watch</button>
            </div>
            <div className={styles.description}>
                <h4>{props.name}</h4>
                <div>{props.desc}</div>
            </div>
        </div>
    );
};

export default Project;