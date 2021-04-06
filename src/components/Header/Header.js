import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<

    console.log('userStatus', userStatus.isLoggedIn);
    console.log('userStatus', userStatus.displayName);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>ShopUp</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav-link mx-md-4" to="/home">Home</Link>
                    <Link className="nav-link mx-md-4" to="/orders">Orders</Link>
                    <Link className="nav-link mx-md-4" to="/admin">Admin</Link>
                </Nav>
                {
                    userStatus.isLoggedIn ?
                        (
                            <div className="ml-md-4 text-light rounded row align-items-center justify-content-between border border-5 px-3 py-1 mx-2">
                                <p className="col-8 m-0 p-0 ">{userStatus.displayName}</p>
                                <div className="col-4 mx-0 px-0 text-center">
                                    <img src={userStatus.profilePicUrl} className="rounded-circle w-50 border border-white" alt="profile picture" />
                                </div>
                            </div>
                        )
                        :
                        (<Link className="ml-md-4 btn btn-outline-info" to="/login">Login</Link>)
                }
            </Navbar>
        </>
    );
};

export default Header;