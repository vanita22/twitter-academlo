import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';

class PrimaryCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: "", 
            comment: 100,
            reTweet: 204,
            like: 124,
            addLike: false,
            addRetweet: false,           
            messages: [
                {
                    message: "hola mundo!", 
                    comment: 100,
                    reTweet: 204,
                    like: 124,
                    addLike: false,
                    addRetweet: false
                }
            ]                        
        };
    }
    aumentLike = () => {
        this.setState((prevState) => ({
            like: prevState.like + 1,
            addLike: true
        }));      
    };

    disLike = () => {
        this.setState((prevState) => ({
            like: prevState.like - 1,
            addLike: false
        }));      
    };

    aumentRetweet = () => {
        this.setState((prevState) => ({
            reTweet: prevState.reTweet + 1,
            addRetweet: true
        }));      
    };

    disRetweet = () => {
        this.setState((prevState) => ({
            reTweet: prevState.reTweet - 1,
            addRetweet: false
        }));       
    };

    setMessage = (e) => {
        e.preventDefault();
        const messagesClone2 = JSON.parse(JSON.stringify(this.state.messages));
        const newMessageObj = {            
            message: this.state.newMessage
        };
        messagesClone2.push(newMessageObj);
        this.setState({ messages: messagesClone2, newMessage: "" });       
    };
    
    capturaInput = (event) => {
        const message = event.target.value;
        this.setState({ newMessage: message });
    };

    removeTweet = (index) => {
        let removeClone = JSON.parse(JSON.stringify(this.state.messages));
        removeClone.splice(index, 1);
        this.setState({messages: removeClone});
    };

    render() {
        return(
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet 
                    profileUrl={this.props.profileUrl} 
                    newMessage={this.state.newMessage}
                    capturaInput={this.capturaInput}
                    setMessage={this.setMessage}
                    aumentLike={this.aumentLike}
                    disLike={this.disLike}
                    aumentRetweet={this.aumentRetweet}
                    disRetweet={this.disRetweet}
                    messages={this.state.messages}
                    removeTweet={this.removeTweet}
                    comment={this.state.comment}
                    reTweet={this.state.reTweet}
                    like={this.state.like}
                    addLike={this.state.addLike}
                    addRetweet={this.state.addRetweet}
                />
                <Feed />
            </div>
        )
    }        
}
export default PrimaryCol;