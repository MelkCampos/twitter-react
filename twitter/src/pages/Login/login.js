import React, { Component } from 'react';

import './login.css';

export default class Login extends Component{

    state = {
        username: ""
    };

    handleSubmit = event => {
        event.preventDefaut();

        const { username } = this.state;
        
        if (!username.length) return;

        localStorage.setItem("@GoTwitter:username", username);

        this.props.history.push("/timeline");
    };

    handleInputChange = event => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg" alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="User name"
                    />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }

   
}


