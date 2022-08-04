import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <div className='main-cont'>
            <h1>Best Email Client</h1>
            <section className="header">
                <nav>
                    <Link className='home' to={''}>Home</Link>
                    <Link className='about' to={'about'}>About</Link>
                    <Link className='inbox' to={'inbox'}>Inbox</Link>
                    <Link className='sent' to={'sent'}>Sent</Link>
                </nav>
            </section>
            <Outlet />
        </div>
    )
}

