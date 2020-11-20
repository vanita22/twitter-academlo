import React, { useState} from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PostMessages = (props) => {  
  const { message } = props.messageObj;
  const [show, setShow] = useState(false);
    return (
      <div>
        <li> 
          <div className="tweet-container">
            <div className="tweet">
              <div className="row">
                <div className="c1">
                    <img src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' alt="profile" />
                </div>
                <div className="c2">
                    <h6>Inés Vanessa Pérez</h6>
                    <h5>@Vanita22</h5>
                </div>                    
              </div>
              <div className="row">
                  <p className="content">                
                    {message}
                  </p>
              </div>
              <div className="row">
                <div className="icon-tweet">
                  <div className="c1">
                    <FontAwesomeIcon icon={faComment} />
                    <p>{props.comment}</p>
                  </div>
                  <div className="c2">
                    <p onClick={props.addRetweet ? 
                      () => props.disRetweet() : 
                      () => props.aumentRetweet()}>
                        {props.addRetweet ? <FontAwesomeIcon icon={faRetweet} style={{color: '#8bc34a'}}/>
                        : <FontAwesomeIcon icon={faRetweet} />}</p>
                    <p>{props.reTweet}</p>
                  </div> 
                  <div className="c3">
                    <p onClick={props.addLike ? 
                      () => props.disLike() : 
                      () => props.aumentLike()}>
                        {props.addLike ? <FontAwesomeIcon icon={faHeart} style={{color: 'red'}}/>
                        : <FontAwesomeIcon icon={faHeart} />}</p>
                    <p>{props.like}</p>
                  </div>                        
                </div>
              </div>
            </div>  
            <div className="tweet-menu">
                <FontAwesomeIcon icon={faEllipsisH} onClick={() => setShow(!show)} />
                {
                  show ?
                    <div className="t-menu" onClick={() => props.removeTweet(props.key)}>
                      <FontAwesomeIcon icon={faTrashAlt} className="trash" />
                      <p>Eliminar</p>
                    </div> : null
                }                
            </div>              
          </div>
        </li>
      </div>
      
    );
  }

  export default PostMessages;