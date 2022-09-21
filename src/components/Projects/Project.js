import React from 'react';

const Project = ({ project }) => {
    return (
        <div className='project'>
            <div className='project__hover-div'></div>
            <div className='project__hover-text'>
                <a target='_blank' rel="noreferrer" href={project.urlGitHub}><i className="fa-brands fa-github"></i></a>
                {project.technos.map((techno) => {
                    return (<p key={techno}>{techno}</p>)
                })}
                
            </div>
            <img src={project.screen} alt="project screen" />
            <p className='para-name'>{project.name}</p>
        </div>
    );
};

export default Project;