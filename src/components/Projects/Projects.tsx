import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Project from "./Project/Project";
import todolistPhoto from '../../assets/todolist-photo.jpg'

const Projects = () => {

    const myProjects = [
        {id: 1, projectName: 'Social Network', description: 'asdfghgfdsf', img: todolistPhoto},
        {id: 2, projectName: 'Todo List', description: 'asdfghgfdsf', img: todolistPhoto}
    ]

    const projects = myProjects.map(pr => <Project key={pr.id}
                                                   name={pr.projectName}
                                                   desc={pr.description}
                                                   img={pr.img}/>)


    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.projectsContainer} ${styleContainer.container}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    {projects}
                </div>
            </div>
        </div>
    );
};

export default Projects;