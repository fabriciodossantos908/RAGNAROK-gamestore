import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import Landing from './pages/Landing'

export default function Routes() {

    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/games" exact component={GamePage} />
        </BrowserRouter>
    )
}