import React from 'react'

export default function Login(props) {
    return (
        <div className='main-cont'>
            <button className='login' onClick={() => {
                props.handleLogin()
            }}>
                Log In
            </button >
        </div>
    )
}
