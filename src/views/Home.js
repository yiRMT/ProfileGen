import React from 'react';
import Start from '../components/Start'
import '../style/home.css';

const Home = () => {
    return (
        <>
            <header>
                <h1 className='title'>
                    ProfileGen powered by OpenAI
                </h1>
            </header>
            <div className='consent'>
                <Start />
            </div>
            <footer>
                <p>
                    This app is powered by OpenAI's GPT-3. It is a demo app and is not intended for commercial use.
                </p>
            </footer>
        </>
    );
};



export default Home;