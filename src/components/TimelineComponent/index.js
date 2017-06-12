import React, {Component} from 'react';
import TweetComponent from "../TweetComponent/index";
import TweetBox from "../TweetBox/index";

export default class TimelineComponent extends Component {
    constructor() {
        super();
        this.state = {
            tweets: [
                {
                    userName: "Ahmet",
                    date: "19.01.2017",
                    text: "Hello World..",
                },
                {
                    userName: "Shornoby",
                    date: "19.01.2027",
                    text: "Hello Earth..",
                },
            ],
        };
    }

    handleNewTweet = (tweetText) => {
        let date = new Date();
        let newTweet = {
            userName: "Ahmet",
            date: date.getDate()+"."+date.getMonth()+"."+date.getFullYear(),
            text: tweetText,
        };
        let newTweets = [newTweet, ...this.state.tweets];
        let newState = {tweets: newTweets};
        this.setState(newState)
    };

    render() {
        return (
            <div className="Timeline">
                <TweetBox handleNewTweet={this.handleNewTweet}/>
                {this.state.tweets.map(item => <TweetComponent text={item.text}
                                                               date={item.date}
                                                               user={item.userName}/>)}
            </div>
        );
    }
}

