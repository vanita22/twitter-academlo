import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Trends from '../trends/trends';
import './style.css';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <SearchBar />
            <Trends />
        </div>
    )
}

export default SidebarCol;