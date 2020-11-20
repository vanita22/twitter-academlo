import React from 'react';
import './styles.css';
import PostMessages from './postMessage';

const PostTweet = (props) => {
    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl}  alt="profile" />
                </div>
                <form>
                    <input type="text" placeholder="¿Qué está pasando?" value={props.newMessage} onChange={props.capturaInput} />
                    <div className="t-post-options">
                        <button onClick={props.setMessage} >Twittear</button> 
                    </div>
                </form>                
            </div>
            <div className="post-message">
                <ul>
                    {props.messages.map((message, index) => {
                        return <PostMessages 
                                    messageObj={message} 
                                    key={index} 
                                    trashMenu={props.trashMenu}
                                    removeTweet={props.removeTweet}
                                    aumentLike={props.aumentLike}
                                    disLike={props.disLike}
                                    aumentRetweet={props.aumentRetweet}
                                    disRetweet={props.disRetweet}
                                    message={props.message}
                                    comment={props.comment}
                                    reTweet={props.reTweet}
                                    like={props.like}
                                    addLike={props.addLike}
                                    addRetweet={props.addRetweet}
                                />;
                    })}                 
                </ul>
            </div>
        </div>
    )    
}

export default PostTweet;