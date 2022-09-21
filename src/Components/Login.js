import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import { UserContext } from '../App';
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [allData, setAllData] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignInHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(res => {
            const newUser = { ...allData }
            newUser.user = res.user;
            setAllData(newUser)
            fetch(`https://murmuring-sands-42782.herokuapp.com/admin?email=${res.user.email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.length === 0) {
                        const admin = { admin: false }
                        sessionStorage.setItem('admin', JSON.stringify(admin))
                        sessionStorage.setItem('user', JSON.stringify(res.user))
                        history.push(from)
                    }
                    else if (data.length > 0) {
                        const admin = { admin: true }
                        sessionStorage.setItem('admin', JSON.stringify(admin))
                        sessionStorage.setItem('user', JSON.stringify(res.user))
                        history.push('/admin')
                    }
                })
        }).catch(err => {
            console.log(err.message);
        })
    }
    const s = {
        margin: '50px auto',
        display: 'block',
        padding: '10px 20px',
        border: '1px solid #EFEFEF'
    }
    return (
        <div>
            
            <div>
                {
                    allData.email ?
                        <h1>hi</h1> :
                        <button style={s} onClick={googleSignInHandler}>Continue With Google</button> 
                }
            </div>
        </div>
    );
};

export default Login;