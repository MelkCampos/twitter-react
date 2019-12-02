import React, { Component } from 'react';
import socket from "socket.io-client";

import api from "../../services/api";
import "./timeline.css";

import Tweet from "../../components/twitter";

export default class Timeline extends Component{

    state = {
        tweets: [],
        newTweet: "",
    };

    async componentDidMount() {
        this.subscribeToEvents();

        const response = await api.get("tweets");

        this.setState({ tweets: response.data });
    }


    subscribeToEvents = () => {
        const io = socket("http://localhost:3000");

        io.on("tweet", data => {
            this.setState({ tweets: [data, ...this.state.tweets] });
        });  

        io.on("like", data => {
            this.setState({
                tweets: this.state.tweets.map(
                    tweet => (tweet._id === data._id ? data : tweet)
                )
            });
        });
    };

    handleNewTweet = async event => {
        
        if (event.keyCode !== 13) return;

        event.preventDefault();

        const content = this.state.newTweet;
        const author = localStorage.getItem("@GoTwitter:username");

        await api.post("twetts", { content, author });

        this.setState({ newTweet: '' });
    }

    handleTweetChange = event => {
        this.setState({ newTweet: event.target.value });
    };


    render() {
       return(
            <div className="timeline-wrapper">
                <img height="24" src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg" alt="GoTwitter" />

            <form>
                <textarea
                value={this.state.newTweet}
                onChange={this.handleTweetChange}
                onKeyDown={this.handleNewTweet}
                placeholder="What is happing?"
                />
            </form>

            <ul className="tweet-list"> 
                {this.state.tweets.map(tweet => (
                    <Tweet key={tweet._id} tweet={tweet} />
                ))}
            </ul>
        </div>
        
        );
    }
}


