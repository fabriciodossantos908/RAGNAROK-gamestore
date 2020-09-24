import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Header() {

    return (
        <header className="page-header" >
            <div className="top-bar-container">
                <div className="navbar-logo">
                    <Link className="navbar-link-item" to="/">
                        RAGNAROK
                    </Link>
                </div>
                <div className="navbar-link">
                    <Link className="navbar-link-item" to="/games">
                        GAMES
                    </Link>

                    <Link className="navbar-link-item" to="/store">
                        STORE
                    </Link>

                </div>
            </div>
        </header >
    )
}