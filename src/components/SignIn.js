import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      console.log('[Succeeded] Sign in')
    } catch (error) {
      alert(error)
      console.error(error)
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
          <h1>ログイン</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label>メールアドレス</label>
              <input 
                name="email"
                type="email"
                value={signInEmail}
                placeholder="メールアドレス" 
                onChange={(event) => setSignInEmail(event.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input 
                name="password"
                type="password"
                value={signInPassword}
                placeholder="パスワード"
                onChange={(event) => setSignInPassword(event.target.value)}
              />
            </div>
            <button>ログイン</button>
            <div>
              新規ユーザ登録は<Link to={'/signup'}>こちら</Link>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default SignIn