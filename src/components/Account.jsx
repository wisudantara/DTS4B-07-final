import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate ('/');
      console.log('you are logout');
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>Account</h1>
      <p>User email: {user && user.email}</p>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</button>
    </div>
  )
}

export default Account