import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='main-cont'>
            <h1>Best Email Client</h1>
            <section className="header">
                <nav>
                    <Link to={''}>Home</Link>
                    <Link to={'about'}>About</Link>
                    <Link to={'inbox'}>Inbox</Link>
                </nav>
            </section>
            <Outlet />
        </div>
    )
}

