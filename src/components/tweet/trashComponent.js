import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Trash(props) { 
    return(
        <div className="t-menu" onClick={() => props.removeTweet(props.index)}>
            <FontAwesomeIcon icon={faTrashAlt} className="trash" />
            <p>Eliminar</p>
        </div>
    )    
}

 