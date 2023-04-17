import React from 'react';
import styles from './Skills.module.css'
import Skill from './Skill/Skill';
import styleContainer from '../../common/styles/Container.module.css'
import Title from '../../common/components/Title';

const Skills = () => {

    const mySkills = [
        {technology: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur'},
        {technology: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur'},
        {technology: 'TypeScript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur'},
    ]

    const skills = mySkills.map(skill => <Skill technology={skill.technology} description={skill.description}/>)

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styles.skillsContainer} ${styleContainer.container}`}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    {skills}
                </div>
            </div>
        </div>
    );
};

export default Skills;