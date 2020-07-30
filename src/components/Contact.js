import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.animateFormAway = this.animateFormAway.bind(this)
    }

    animateFormAway() {
        event.preventDefault()
        document.querySelector('form').classList.add('submitted')
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Let's Work Together!</h1>
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input id="name" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Your Email</label>
                        <input id="email" type="email"></input>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number (Optional)</label>
                        <input id="phone" type="tel"></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" type="text"></textarea>
                    </div>
                    <button onClick={this.animateFormAway}>Contact Me</button>
                </form>
            </div>
        );
    }
}

export default Contact;