import React, { useEffect, useRef } from 'react';
import { projects } from '../../dataProjects/dataProjects';
import Project from './Project';
import scrollReveal from 'scrollreveal';

const Projects = () => {

    const modalRef = useRef(null);

        useEffect(() => {
          if (modalRef.current)
            scrollReveal().reveal(modalRef.current, {
              reset: true,
              delay: 100,
              origin: 'top',
              distance: '50px',
            });
        }, [])

    return (
        <section ref={modalRef} className='projects-content__modal'>
            <h2>Projects</h2>
            <div className='projects-content__modal__screens'>
                {projects.map((project) => {
                    return (
                        <Project key={project.name} project={project} />
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;