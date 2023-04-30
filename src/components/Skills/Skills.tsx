import React from 'react';
import styles from './Skills.module.scss'
import Skill from './Skill/Skill';
import styleContainer from '../../common/styles/Container.module.css'
import Title from '../../common/components/Title';
import reactIcon from '../../assets/images/skills/React-icon.png'
import tsIcon from '../../assets/images/skills/TS-icon.png'
import reduxIcon from '../../assets/images/skills/Redux-icon.svg'
import uniTestsIcon from '../../assets/images/skills/uniTests-icon.svg'
import storybookIcon from '../../assets/images/skills/Storybook-icon.svg'
import gitIcon from '../../assets/images/skills/git-icon.svg'
import htmlIcon from '../../assets/images/skills/HTML5-icon.png'
import cssIcon from '../../assets/images/skills/CSS3-icon.png'

const Skills = () => {

    const mySkills = [
        {technology: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: reactIcon,
        },
        {technology: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: reduxIcon,
        },
        {technology: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: tsIcon,
        },
        {technology: 'Storybook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: storybookIcon,
        },
        {technology: 'Unit tests',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: uniTestsIcon,
        },
        {technology: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: htmlIcon,
        },
        {technology: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: cssIcon,
        },
        {technology: 'Git',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis natus non odit optio quam tenetur',
            icon: gitIcon,
        },
    ]

    const skills = mySkills.map((skill, index) =>
        <Skill key={index}
               technology={skill.technology}
               description={skill.description}
               icon={skill.icon}/>)

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