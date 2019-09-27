import React from 'react';

import './Registry.css'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            lastname: '',
            address: '',
            login: '',
            password: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit() {
        console.log(this.state.login, this.state.password);
        this.setState({
                name: '',
                surname: '',
                lastname: '',
                address: '',
                login: '',
                password: '',
            }
        );
    }

    render() {
        return (
            <div
                className="form-container form-container__margin form-container__size-big form-container__border-style">
                <h2>Присоединяйся</h2>
                <form className="registry-form">
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-m" required
                           placeholder="Имя" type="text" value={this.state.login} name="name"/>
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-m" required
                           placeholder="Фамилия" type="password" value={this.state.password} name="surname"/>
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-m" required
                           placeholder="Отчество" type="text" value={this.state.login} name="lastname"/>
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-big" required
                           placeholder="Адрес проживания" type="text" value={this.state.password} name="address"/>
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-m" required
                           placeholder="Login" type="text" value={this.state.login} name="login"/>
                    <input onChange={this.onInputChange} className="registry-form_input registry-form_input__border registry-form_input__size-m" required
                           placeholder="Password" type="password" value={this.state.password} name="password"/>
                </form>
                <button
                    onClick={this.onSubmit}
                    className="registry-form_button registry-form_button__size-m registry-form_button__green-theme button">
                    Присоединиться
                </button>
            </div>
        );
    }
}

export default Login;
