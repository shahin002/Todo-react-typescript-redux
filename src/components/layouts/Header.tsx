import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);
    // @ts-ignore
    const [userData] = useState(JSON.parse(localStorage.getItem("userData")) || undefined);

    useEffect(() => {
        if (typeof userData != "undefined") {
            setCurrentUser(true);
        } else {
            setCurrentUser(false);
        }
    }, [currentUser]);
    return (
        <Navbar className="custom-nav" variant="light">
            <div className="container">
                <Navbar.Brand>
                    Welcome to Board <b>{userData.user.displayName}</b>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {currentUser && (
                            <>
                                <Link className="mx-2" to="/">Home </Link>

                                {/*<Link className="mx-2" onClick={signOutUser} to={""}>*/}
                                {/*    {" "}*/}
                                {/*    SignOut*/}
                                {/*</Link>*/}
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;