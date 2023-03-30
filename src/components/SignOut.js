import React from "react";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignOut = () => {
  const navigate = useNavigate();
  const handleClickSignOut = async () => {
    try {
      await signOut(auth)
      console.log('[Succeeded] Sign out')
      navigate('/signin')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button onClick={handleClickSignOut}>ログアウト</button>
  )
}

export default SignOut