import React from 'react';
import './SkillsPage.css';

import htmlLogo from '../../assets/logos/html.png';
import cssLogo from '../../assets/logos/css.png';
import jsLogo from '../../assets/logos/javascript-logo.png';
import bootstrapLogo from '../../assets/logos/bootstrap-logo.png';
import reactLogo from '../../assets/logos/react-logo-1.png';
import javaLogo from '../../assets/logos/java-logo-2.png';
import mysqlLogo from '../../assets/logos/mysql-logo-3.png';
import pythonLogo from '../../assets/logos/Py.png';
import flutterLogo from '../../assets/logos/flutter.png';
import NodeLogo from '../../assets/logos/njs.png';
import cLogo from '../../assets/logos/c.png';
import LinuxLogo from '../../assets/logos/Linux.png';
import ButtonLabel from '../ButtonLabel';


export default function SkillsPage() {

    const usingNowSkills = [
        { name: 'Html', logo: htmlLogo },
        { name: 'CSs', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'BootStrap', logo: bootstrapLogo },
        { name: 'React', logo: reactLogo },
        { name: 'java', logo: javaLogo },
        { name: 'mySql', logo: mysqlLogo }
    ]



    const learningSkills = [
        { name: 'Node JS', logo: NodeLogo },
        { name: 'Flutter', logo: flutterLogo },
        { name: 'Python', logo: pythonLogo },
        { name: 'BootStrap', bootstrapLogo },
    ]

    const moreSkills = [
        { name: 'C++', logo: cLogo },
        { name: 'Linux', logo: LinuxLogo },
    ]


    return (
        <>

            <div className="skillsPage">
                <ButtonLabel title='Skills' />
                <h3>Using Now</h3>
                <div className="skills" >
                    {
                        usingNowSkills.map((skill) => (
                            <div className="skillsItem" data-aos='fade-up'>
                                <img src={skill.logo} alt={skill.name} />
                                <h5>{skill.name}</h5>
                            </div>
                        ))
                    }
                </div>
                <h3>Learning</h3>
                <div className="skills">

                    {
                        learningSkills.map((skill) => (
                            <div className="skillsItem" data-aos='fade-up'>
                                <img src={skill.logo} alt={skill.name} />
                                <h5>{skill.name}</h5>
                            </div>
                        ))
                    }
                </div>
                <hr />

                <h3>Other Skills</h3>
                <div className="skills">
                    {
                        moreSkills.map((skill) => (
                            <div className="skillsItem" data-aos='fade-up'>
                                <img src={skill.logo} alt={skill.name} />
                                <h5>{skill.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
