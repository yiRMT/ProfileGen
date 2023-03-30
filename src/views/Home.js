import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Start from '../components/Start'
import SignOut from '../components/SignOut';
import '../style/login.css';

const Home = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <>
            {user ? (
                <>
                    <div>
                        <div className='consent'>
                            <div className='section'>
                                <h1>誰かが代わりにES書いてくれるサイト</h1>
                                <p>AIくんいつもありがとう！</p>
                            </div>
                            <div>
                                <p>アカウントEmail: {user.email}</p>
                                <p>アカウントUID: {user.uid}</p>
                                <SignOut/>
                            </div>
                            <Start />
                        </div>
                    </div>
                </>
            ) : (
                <Navigate to={`/signin`}/>
            )}
        </>
    );
};



export default Home;