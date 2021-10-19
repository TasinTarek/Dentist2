import React from 'react';
import { Button } from 'react-bootstrap';
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import initAuth from '../Firebase/Firebase.init';

initAuth();

const googleProvider = new GoogleAuthProvider();



const Login = () => {

    const handleGoogle = () =>{
            const auth = getAuth();
            signInWithPopup(auth , googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }
    return (
        <div>
            <Button onClick={handleGoogle}>Google Sign In</Button>
            
        </div>
    );
};

export default Login;