import React from 'react';
import { Redirect } from 'react-router-dom'

import login from 'api/login'

import './Login.css'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            logData : {
                loggedIn: false,
                userId: -1
            }
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    renderRedirect() {
        if (this.state.logData.loggedIn) {
            console.log('redirect ---->')
            return <Redirect to={`/user/${this.state.logData.userId}`} />;
        }
    }

    onInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit() {
        login({
            username: this.state.login,
            password: this.state.password
        })
            .then(res => {
                if (res.status === "ok") {
                    this.setState({
                        logData: {
                            loggedIn: true,
                            userId: res.user_id
                        }
                    })
                }
            })


        // this.setState(
        //     {login: '', password: '',}
        // );
    }

    render() {
        return (
            <div
                className="form-container form-container__margin form-container__size-small form-container__border-style">
                <h2>Вход</h2>
                <div className="login-form">
                    <input onChange={this.onInputChange} className="login-form_input login-form_input__border login-form_input__size-big" required
                           placeholder="Login" type="text" value={this.state.login} name="login"/>
                    <input onChange={this.onInputChange} className="login-form_input login-form_input__border login-form_input__size-big" required
                           placeholder="Password" type="password" value={this.state.password} name="password"/>
                    <button
                        onClick={this.onSubmit}
                        className="login-form_button login-form_button__size-m login-form_button__green-theme button">
                        Вход
                    </button>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}

export default Login;
