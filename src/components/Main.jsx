import React from 'react'
import Layout from './Layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'
import { useEffect, useState } from 'react'
import Login from './Login'
import Inbox from './Inbox'
import Email from './Email'
import Sent from './Sent'
import SentEmail from './SentEmail'

export default function Main() {
    let goTo = useNavigate();
    let [login, setLogin] = useState(false);
    useEffect(() => {
        if (!login) {
            goTo('/login')
        }
        else {
            goTo('/');
        }
    }, [])

    function handleLogin() {
        setLogin(true);
        goTo('/');
    }

    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login handleLogin={handleLogin} />} />
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/inbox/:inboxID' element={<Email />} />
                    <Route path='/sent' element={<Sent />} />
                    <Route path='/sent/:sentID' element={<SentEmail/>} />
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    )
}



