import React, {FC} from 'react';
import styles from './Skill.module.scss'

type SkillsPropsType = {
    technology: string
    description: string
    icon: string
}

const Skill:FC<SkillsPropsType> = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={props.icon} alt="icon"/>
            </div>
            <h4 className={styles.technologyName}>{props.technology}</h4>
        </div>
    );
};

export default Skill;