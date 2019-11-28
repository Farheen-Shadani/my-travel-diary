import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    return (

        <div className="Header">

            <div className="my-logo">
                <h2>My Diary</h2>
            </div>

            <div className="my-tabs">

                <Link to="/" exact >
                    <FontAwesomeIcon icon={faHome} />
                    <h5>Home</h5>
                </Link>

                <Link to="/add" >
                    <FontAwesomeIcon icon={faPlus} />
                    <h5>Add Note</h5>
                </Link>

            </div>

        </div>

    );

}