import React from 'react';
import styles from './Skills.module.scss'
import Skill from './Skill/Skill';
import styleContainer from '../../common/styles/Container.module.css'
import Title from '../../common/components/Title';
import react from '../../assets/images/skills/react.png'
import ts from '../../assets/images/skills/typescript.png'
import redux from '../../assets/images/skills/redux.svg'
import unittests from '../../assets/images/skills/unit-tests.svg'
import storybook from '../../assets/images/skills/storybook.svg'
import git from '../../assets/images/skills/git.svg'
import html from '../../assets/images/skills/html.png'
import css from '../../assets/images/skills/css.png'
import restAPI from '../../assets/images/skills/rest-api.png'
import mui from '../../assets/images/skills/mui.png'
import ant from '../../assets/images/skills/ant.png'
import formik from '../../assets/images/skills/formik.png'
import {Slide} from "react-awesome-reveal";

export type SkillType = {
    technology: string
    icon: string
}

const Skills = () => {

    const mySkills: SkillType[] = [
        {technology: 'React', icon: react},
        {technology: 'Redux', icon: redux},
        {technology: 'TypeScript', icon: ts},
        {technology: 'Storybook', icon: storybook},
        {technology: 'Unit tests', icon: unittests},
        {technology: 'HTML', icon: html},
        {technology: 'CSS', icon: css},
        {technology: 'Git', icon: git},
        {technology: 'Rest API', icon: restAPI},
        {technology: 'Material UI', icon: mui},
        {technology: 'Ant Design', icon: ant},
        {technology: 'Formik', icon: formik},
    ]

    const skills = mySkills.map((skill, index) =>
        <Skill key={index}
               technology={skill.technology}
               icon={skill.icon}/>)

    return (
        <div className={styles.skillsBlock}>
            <div id={'skills'} className={`${styles.skillsContainer} ${styleContainer.container}`}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    {skills}
                </div>
            </div>
        </div>
    );
};

export default Skills;