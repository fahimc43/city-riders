import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">City Riders</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            {loggedInUser.email? <Link className="nav-link" onClick={() => setLoggedInUser({})}>Sign Out</Link>
                            : <Link className="nav-link" to="/login">Login</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active user-email" to="/home">{loggedInUser.email}</Link>
                        </li>
                        {/* <li className="nav-item">
                            <button className="nav-button">Sign Out</button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;