import React, {FC} from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    name: string
    desc: string
    img: string
    url: string
}

const Project:FC<ProjectPropsType> = (props) => {

    const backgroundStyle = {
        backgroundImage: `url(${props.img})`,
    }

    return (
        <div className={styles.project}>
            <div className={styles.projectImage} style={backgroundStyle}>
                <a href={props.url} target={'_blank'} className={styles.button}>watch</a>
            </div>
            <div className={styles.aboutProject}>
                <h4 className={styles.projectName}>{props.name}</h4>
                <div className={styles.projectDescription}>{props.desc}</div>
            </div>
        </div>
    );
};

export default Project;