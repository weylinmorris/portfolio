import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset <= 20) {
                document.getElementsByClassName('arrow-down')[0].style.opacity = 1
            } else if (window.pageYOffset > 20 && window.pageYOffset < 95) {
                document.getElementsByClassName('arrow-down')[0].style.opacity = 1 - (window.pageYOffset - 5) / 75
            } else {
                document.getElementsByClassName('arrow-down')[0].style.opacity = 0
            }
        })
    }

    scrollDown() {
        window.scroll({
            behavior: 'smooth',
            top: 5000
        })
    }

    render() {
        return (
            <div>
                <div className="homepage-container">
                    <div className="bio-container">
                        <h1>Hello!</h1>
                        <p className="bio">
                            I am a web developer who is passionate about developing
                            tools that startup companies need to thrive. I have experience
                            with creating APIs and websites using all of the latest technologies!
                        </p>
                        <Link className="bio-link" to="/portfolio">See My Work</Link>
                    </div>
                    <img width="630px" height="440px" src="./media/computer-phone-graphic.svg" />
                </div>
                <div className="arrow-down" onClick={this.scrollDown}>
                    <p>Skills</p>
                    <img width="100px" src="./media/arrow-down.png" />
                </div>
                <div className="skills">
                    <p className="javascript">Javascript</p>
                    <p className="html">HTML</p>
                    <p className="css">CSS</p>
                    <p className="mongodb">MongoDB</p>
                    <p className="react">React</p>
                    <p className="nodejs">Node.js</p>
                    <p className="jquery">jQuery</p>
                    <p className="bootstrap">Bootstrap</p>
                    <p className="git">Git/SCM</p>
                    <p className="babel">Babel</p>
                    <p className="webpack">Webpack</p>
                    <p className="heroku">Heroku</p>
                </div>
            </div>
        );
    }
}

export default Homepage;