import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Project from './Project/Project';
import todolistImg from '../../assets/images/todolistImg.jpg'
import socialNetworkImg from '../../assets/images/socialnetworkImg.jpg'
import mapImg from '../../assets/images/map.jpg'
import cardsImg from '../../assets/images/cards.jpg'
import Title from '../../common/components/Title';

export type ProjectType = {
    projectName: string
    description: string
    img: string
    url: string
}

const Projects = () => {

    const myProjects: ProjectType[] = [
        {
            projectName: 'Training Cards',
            description: 'React, Redux Toolkit, TypeScript, Material UI',
            img: cardsImg, url: 'https://stydy-cards.vercel.app'
        },
        {
            projectName: 'Todo List',
            description: 'React, Redux, TypeScript, Material UI, Storybook, Unit tests',
            img: todolistImg, url: 'https://antonsadovskiy.github.io/todolist'
        },
        {
            projectName: 'Social Network',
            description: 'React, Redux, TypeScript, Ant Design, Unit tests',
            img: socialNetworkImg, url: 'https://antonsadovskiy.github.io/samurai-way-main/'
        },
        {
            projectName: 'One Map - One Route',
            description: 'React, Redux, TypeScript, Material UI',
            img: mapImg, url: 'http://x29206hr.beget.tech/'
        }
    ]

    const projects = myProjects.map((pr, index) =>
        <Project key={index}
                 projectName={pr.projectName}
                 description={pr.description}
                 img={pr.img}
                 url={pr.url}/>)

    return (
        <div className={styles.projectsBlock}>
            <div id={'projects'} className={`${styles.projectsContainer} ${styleContainer.container}`}>
                <Title title={'My projects'}/>
                <div className={styles.projects}>
                    {projects}
                </div>
            </div>
        </div>
    );
};

export default Projects;