import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <Link to="/">Book Listing</Link>
                </div>

                <nav className="main-nav">
                    <ul>
                        <li>
                            <a href="#!">New Book</a>
                        </li>
                        <li>
                            <a href="#!">New Author</a>
                        </li>
                        <li>
                            <a href="#!">New Category</a>
                        </li>
                        <li>
                            <a href="#!">Edit Mode</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
