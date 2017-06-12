import React, { Component } from 'react';
import firebase from "../../firebase.js";

export default class SingUp extends Component {
    constructor() {
        super();


        this.state = {
            email: "",
            password: "",
            error: "",
        }
    }


    userChange=(event) => {
        this.setState({email: event.target.value});
    };

    passwordChange=(event) => {
        this.setState({password: event.target.value});
    };

    handleClick=() => {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
                this.setState({error: errorMessage})
        });
    };

    render() {
        return (
            <div className="SingUp">
                E-mail:<input value={this.state.email} onChange={this.userChange} type="email"/>
                Password:<input value={this.state.password} onChange={this.passwordChange} type="password"/>
                <button onClick={this.handleClick}>Sing Up!</button>
                <div><p>{this.state.error}</p></div>
            </div>
        );
    }
}

