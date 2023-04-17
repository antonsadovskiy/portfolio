import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Project from './Project/Project';
import todolistImg from '../../assets/images/todolistImg.jpg'
import socialNetworkImg from '../../assets/images/socialnetworkImg.jpg'
import Title from '../../common/components/Title';

const Projects = () => {

    const myProjects = [
        {id: 1, projectName: 'Social Network', description: 'A social network that allows users to communicate, share interests and find new friends', img: socialNetworkImg},
        {id: 2, projectName: 'Todo List', description: 'Provides convenient storage of your records and helps you to be organized and productive.', img: todolistImg}]

    const projects = myProjects.map(pr =>
        <Project key={pr.id}
                 name={pr.projectName}
                 desc={pr.description}
                 img={pr.img}/>)

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