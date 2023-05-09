import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Project from './Project/Project';
import todolistImg from '../../assets/images/todolistImg.jpg'
import socialNetworkImg from '../../assets/images/socialnetworkImg.jpg'
import mapImg from '../../assets/images/map.jpg'
// import counterImg from '../../assets/images/'
import Title from '../../common/components/Title';

const Projects = () => {

    const myProjects = [
        {id: 1, projectName: 'Social Network',
            description: 'A social network that allows users to communicate, share interests and find new friends',
            img: socialNetworkImg, url: 'https://antonsadovskiy.github.io/samurai-way-main/'},
        {id: 2, projectName: 'Todo List',
            description: 'Provides convenient storage of your records and helps you to be organized and productive.',
            img: todolistImg, url: 'https://antonsadovskiy.github.io/todolist'},
        {id: 3, projectName: 'Counter',
            description: 'Counter allows users to easily track their progress and save information between application sessions.',
            img: '', url: 'https://antonsadovskiy.github.io/counter/'},
        {id: 4, projectName: 'One Map - One Route',
            description: 'This app allows you to find the necessary points on the map, build and determine more suitable routes for you.',
            img: mapImg, url: 'http://x29206hr.beget.tech/'}
    ]

    const projects = myProjects.map(pr =>
        <Project key={pr.id}
                 name={pr.projectName}
                 desc={pr.description}
                 img={pr.img}
                 url={pr.url}/>)

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.projectsContainer} ${styleContainer.container}`}>
                <Title title={'My projects'}/>
                <div className={styles.projects}>
                    {projects}
                </div>
            </div>
        </div>
    );
};

export default Projects;