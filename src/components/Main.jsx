import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    )
}



