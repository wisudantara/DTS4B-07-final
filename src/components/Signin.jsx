import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password)
            navigate('/main')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            
        }
    }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
            <p className='py-2'>
                Don't have an account yet? <Link to='/signup' className='underline'>Sign up.</Link>
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email address</label>
                <input onChange = {(e) => setEmail(e.target.value)} className='border p-3 text-stone-600' type={'email'} />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange = {(e) => setPassword(e.target.value)} className='border p-3 text-stone-600' type={'password'} />
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white' >Sign in</button>
        </form>
    </div>
  )
}

export default Signin