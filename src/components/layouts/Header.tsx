import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);
    // @ts-ignore
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || undefined);

    useEffect(() => {
        if (typeof userData != "undefined") {
            setCurrentUser(true);
        } else {
            setCurrentUser(false);
        }
    }, [currentUser]);
    return (
        <Navbar className="custom-nav" variant="light"expand="lg" >
            <div className="container">
                <Navbar.Brand href="/">
                    Welcome to Board <b>{userData.user.displayName}</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        {currentUser && (
                            <>
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>

                                <Nav.Link>
                                    {/*<Link onClick={signOutUser} to={""}>*/}
                                    {/*    {" "}*/}
                                    {/*    SignOut*/}
                                    {/*</Link>*/}
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;