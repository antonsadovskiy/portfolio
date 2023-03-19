import React, {FC} from 'react';
import styles from './Skill.module.css'

type SkillsPropsType = {
    technology: string
    description: string
}

const Skill:FC<SkillsPropsType> = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src="" alt="icon"/>
            </div>
            <h3>{props.technology}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

export default Skill;