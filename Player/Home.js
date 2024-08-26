import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <nav className="nav-container">
            
            <ul>
                <li>
                    <Link to='/addplayer'>Add Player</Link>
                </li>
                <li>
                    <Link to='/matchstatistic'>Match Statistic</Link>
                </li>
                <li>
                    <Link to='/topplayer'>Top Players</Link>
                </li>
            </ul>
            <img src='https://th.bing.com/th?id=OIP.AQbT9kH4arqpC_9BNEZh4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' height={400} width={400}></img>
        </nav>
    );
};

export default Home;
