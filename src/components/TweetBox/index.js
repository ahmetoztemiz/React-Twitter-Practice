import React, { Component } from 'react';


export default class TweetBox extends Component {
    constructor() {
        super();
        this.state = {text: ""}
    }

    handleClick = () => {
        this.props.handleNewTweet(this.state.text)
    };

    handleChange = (event) => {
        this.setState({text: event.target.value.slice(0, 140)})
    };

    render() {
        return (
            <div className="TweetBox">
                <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                <button onClick={this.handleClick}>Add Tweet</button>
            </div>
        );
    }
}

