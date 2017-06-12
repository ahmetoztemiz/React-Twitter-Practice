import React, { Component } from 'react';

export default class TweetComponent extends Component {
    constructor() {
        super();
        this.state={
            liked: false,
        }
    }
    handleLikeButton = () => {
        this.setState({liked: !this.state.liked});
    };

    render() {
        return (
            <div className="Tweet">
                <hr/>
                <p>{this.props.user}</p>
                <p>{this.props.date}</p>
                <p>{this.props.text}</p>
                <button onClick={this.handleLikeButton}>Like!</button>
                <p>Tweet {this.state.liked ? "liked": "unliked"}</p>
            </div>
        );
    }
}

