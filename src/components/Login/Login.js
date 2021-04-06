import React, { useContext } from 'react';
import { UserContext } from '../../App';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<



    //firebase SignIn By Google>> >>
    // Initialize Firebase>
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // Initialize Firebase<
    const handleGoogleSign = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const currentUserCreated = { ...userStatus };
                currentUserCreated.isLoggedIn = true;
                currentUserCreated.email = user.email;
                currentUserCreated.displayName = user.displayName || user.email.split('@')[0];
                currentUserCreated.profilePicUrl = user.photoURL;
                setUserStatus(currentUserCreated);
                console.log('UserStatusContext in login', userStatus);
            }).catch((error) => {
                console.log(error.message);
            });
    }
    //firebase SignIn By Google<< <<



    return (
        <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-info w-25 rounded-pill" onClick={handleGoogleSign}><FaGoogle/> SIGNING WITH GOOGLE</button>
        </div>
    );
};

export default Login;