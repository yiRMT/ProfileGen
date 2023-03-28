import React from 'react';
import Start from '../components/Start'
import '../style/login.css';

const Login = () => {


    return (
        
        <div>
            <div className='consent'>
                <div className='section'>
                    <h1>誰かが代わりにES書いてくれるサイト</h1>
                    <p>AIくんいつもありがとう！</p>
                    
                </div>
                
                
                <Start />
                
            </div>
        </div>
    );
};



export default Login;