import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Trash from './trashComponent';

class Tweet extends React.Component{   
    render(){
        return (            
            <div className="tweet-container">
                <div className="tweet">
                    <div className="row">
                        <div className="c1">
                            <img src={this.props.profileUrl} alt="profile" />
                        </div>
                        <div className="c2">
                            <h6>{this.props.profile}</h6>
                            <h5>{this.props.username}</h5>
                        </div>                    
                    </div>
                    <div className="row">
                        <p className="content">                
                            {this.props.content}
                        </p>
                    </div>
                    <div className="row">
                        <div className="icon-tweet">
                            <div className="c1">
                                <FontAwesomeIcon icon={faComment} />
                                <p>{this.props.comments}</p>
                            </div>
                            <div className="c2">
                                <p onClick={this.props.addRetweet ? 
                                () => this.props.disRetweet(this.props.index) : 
                                () => this.props.aumentRetweet(this.props.index)}>
                                    {this.props.addRetweet ? <FontAwesomeIcon icon={faRetweet} style={{color: '#8bc34a'}}/>
                                    : <FontAwesomeIcon icon={faRetweet} />}</p>
                                <p>{this.props.retweets}</p>
                            </div> 
                            <div className="c3">
                                <p onClick={this.props.addLike ? 
                                () => this.props.disLike(this.props.index) : 
                                () => this.props.aumentLike(this.props.index)}>
                                    {this.props.addLike ? <FontAwesomeIcon icon={faHeart} style={{color: 'red'}}/>
                                    : <FontAwesomeIcon icon={faHeart} />}</p>
                                <p>{this.props.likes}</p>
                            </div>                        
                        </div>
                    </div>
                </div>  
                <div className="tweet-menu">
                    <FontAwesomeIcon icon={faEllipsisH} onClick={() => this.props.trashMenu(this.props.index)} />
                    {
                        this.props.verified_trash ? <Trash removeTweet={this.props.removeTweet} index={this.props.index} /> : null
                    }
                    
                </div>              
            </div>
        )
    }
}

export default Tweet;
