import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: feed,
        };
    }
    
    aumentLike = (index) => {
        let contLike = JSON.parse(JSON.stringify(this.state.tweets));
        contLike[index].interaction.likes += 1;
        contLike[index].addLike = true;
        this.setState({ tweets: contLike });       
    };

    disLike = (index) => {
        let contLike = JSON.parse(JSON.stringify(this.state.tweets));
        contLike[index].interaction.likes -= 1;
        contLike[index].addLike = false;
        this.setState({ tweets: contLike });       
    };

    aumentRetweet = (index) => {
        let contRetweet = JSON.parse(JSON.stringify(this.state.tweets));
        contRetweet[index].interaction.retweets += 1;
        contRetweet[index].addRetweet = true;
        this.setState({ tweets: contRetweet });       
    };

    disRetweet = (index) => {
        let contRetweet = JSON.parse(JSON.stringify(this.state.tweets));
        contRetweet[index].interaction.retweets -= 1;
        contRetweet[index].addRetweet = false;
        this.setState({ tweets: contRetweet });       
    };

    trashMenu = (index) => {
        let menuClone = JSON.parse(JSON.stringify(this.state.tweets));
        menuClone[index].verified_trash = !menuClone[index].verified_trash;
        this.setState({tweets: menuClone});
    }

    removeTweet = (index) => {
        let removeClone = JSON.parse(JSON.stringify(this.state.tweets));
        removeClone.splice(index, 1);
        this.setState({tweets: removeClone});
    }
 
    render() {
        return (
            <div>
                {
                    this.state.tweets.map((tweet, index) => {
                        return (
                            <Tweet
                                key={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                aumentLike={this.aumentLike}
                                disLike={this.disLike}
                                aumentRetweet={this.aumentRetweet}
                                disRetweet={this.disRetweet}
                                addLike={tweet.addLike}
                                addRetweet={tweet.addRetweet}
                                verified_trash={tweet.verified_trash}
                                trashMenu={this.trashMenu}
                                removeTweet={this.removeTweet}
                                index={index} />                                
                        );
                    })
                }
                
            </div>
        );
    }
}

export default Feed;