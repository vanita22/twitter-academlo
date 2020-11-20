import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { user } from '../user/user';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            // searchUser: "",
            users: user,
            newProfileUrl: 'https://screenshots.gamebanana.com/img/ico/sprays/nu8_2.png'
        };
    }

    handleSearch = (event) => {
        const user = event.target.value;
        this.setState({ searchUser: user });
    };

    render() {
        return (
            <div>
                <div className="s-buscador">
                    <FontAwesomeIcon icon={faSearch} className="s-search-buscador" />
                    <input type="text" placeholder=' Buscar en twitter' onChange={this.handleSearch} value={this.state.searchUser}></input>
        
                    {
                        this.state.users.filter((user) => user.profile.includes(this.state.searchUser)
                        ).map((user) => {
                            return (                    
                                <div className="list">                                
                                    <img src={user.profileImg} alt="profileImage" />
                                    <h5>{user.profile}</h5>
                                    <small>{user.username}</small>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="s-row">                
                    <div className="s-title">
                        <h3>Qué está pasando</h3>
                    </div>
                    <div className="search">
                        <div className="s-search">
                            <div className="s-tend">
                                <h5>Elecciones en EEUU . </h5>
                                <p> En Directo</p>
                            </div>                        
                            <p>Elecciones EE.UU.: votantes esperan resultados en estados claves mientras continúa el conteo de votos.</p>
                            <div className="s-footer">
                                <h5>Tendencias sobre </h5>
                                <h6>Biden -264, Trump 214</h6>
                            </div>                        
                        </div>
                        <div className="s-imagen">
                            <img src={this.state.newProfileUrl}  alt="profile" />
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchBar;