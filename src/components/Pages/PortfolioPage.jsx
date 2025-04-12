import React from 'react'
import './PortfolioPage.css';
import ButtonLabel from '../ButtonLabel';
import Item from '../Item';
import reactLogo from '../../assets/logos/react-logo-1.png';
import htmlLogo from '../../assets/logos/html.png';
import java from '../../assets/logos/java-logo-2.png';
import flutter from '../../assets/logos/flutter.png';

export default function PortfolioPage() {

    const projects = [
        {
            title: 'Tic Tac Toe',
            description: 'React based tic tac toe game for two players indicating turns',
            image: reactLogo,
            link: 'https://github.com/Amanullah-Kubar/tic_tack_toe'
        },
        {
            title: 'News App',
            description: 'News app fetching data from API based on categories like business, sports, health, etc.',
            image: reactLogo,
            link: 'https://github.com/Amanullah-Kubar/News_app'
        },
        {
            title: 'Text Util',
            description: 'React-based text utility app which can make text uppercase, camelCase, remove extra spaces, etc.',
            image: reactLogo,
            link: 'https://github.com/Amanullah-Kubar/text-utils'
        },
        {
            title: 'Web Calculator',
            description: 'Web calculator using HTML, CSS, and JavaScript. It can perform basic operations.',
            image: htmlLogo,
            link: 'https://github.com/Amanullah-Kubar/web-calculator'
        },
        {
            title: 'Mill Management',
            description: 'Java-based system to manage mills run by individuals. Stores data and performs computations.',
            image: java
        },
        {
            title: 'Todo List',
            description: 'Basic frontend of a todo list built with Flutter.',
            image: flutter,
            link: 'https://github.com/Amanullah-Kubar/Todo-List'
        }
    ];

    return (
        <div className="portfolioPage">
            <ButtonLabel title='Portfolio' />
            <div className="mainContainer">
                {projects.map((project, index) => (
                    <Item
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
