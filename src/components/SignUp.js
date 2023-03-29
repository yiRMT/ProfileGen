import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignUp = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      console.log('[Succeeded] Sign up')
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  return (
    <>
      {user ? (
        <Navigate to={`/`}/>
      ) : (
        <>
          <h1>新規ユーザ登録</h1>
          <form onSubmit={handleSignUp}>
            <div>
              <label>メールアドレス</label>
              <input 
                name="email"
                type="email"
                value={signUpEmail}
                placeholder="メールアドレス" 
                onChange={(event) => setSignUpEmail(event.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input 
                name="password"
                type="password"
                value={signUpPassword}
                placeholder="パスワード"
                onChange={(event) => setSignUpPassword(event.target.value)}
              />
            </div>
            <button>アカウント作成</button>
            <div>
              ログインは<Link to={'/signin'}>こちら</Link>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SignUp