import React from 'react';
import logoReact from '../../logo.svg';
import logoRedux from "../../logos/redux.png";
import logoJavascript from '../../logos/js.png';
import logoCss from "../../logos/css.png";
import logoHtml from "../../logos/html.png";
import logoSass from "../../logos/sass.png";
import logoFirebase from "../../logos/firebase.png";
import logoTypescript from "../../logos/ts.png";
import logoGithub from "../../logos/github.png";
import logoMongo from "../../logos/mongo.png";
import logoMysql from "../../logos/mysql.png";
import logoNode from "../../logos/node.png";

const Skills = () => {
    return (
        <div>
            <div className='waveTop'></div>
            <div className='skills-content'>
                <div className='skills-content__modal'>
                    <h2>Skills</h2>
                    <div className='skills-content__modal__logos'>
                        <img src={logoReact} alt="React" />
                        <img src={logoRedux} alt="Redux" />
                        <img src={logoJavascript} alt="Javascript" />
                        <img src={logoCss} alt="CSS" />
                        <img src={logoHtml} alt="HTML" />
                        <img src={logoSass} alt="SASS" />
                        <img src={logoFirebase} alt="Firebase" />
                        <img src={logoTypescript} alt="Typescript" />
                        <img src={logoNode} alt="Node" />
                        <img src={logoMysql} alt="Mysql" />
                        <img src={logoMongo} alt="Mongo" />
                        <img src={logoGithub} alt="Github" />
                    </div>
                </div>
            </div>
            <div className='waveBot'></div>
        </div>
    );
};

export default Skills;