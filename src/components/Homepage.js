import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="bio-container">
                    <p className="bio">
                        Hi! I am a developer who is passionate about helping startup companies
                        develop a web presence! I have experience with creating API's and websites
                        to meet client needs using all of the latest technologies.
                    </p>
                </div>
                <ul className="proficiencies">
                    <h3>Here are some of my skills!</h3>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>JavaScript (including ES6 and ES7)</li>
                    <li>Project Management</li>
                    <li>Git/SCM & GitHub</li>
                    <li>Heroku/Cloud Deployment</li>
                </ul>
            </div>
        );
    }
}

export default Homepage;