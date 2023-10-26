import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
// import QuizPage from '../Components/QuizPage'
import Dashboard from '../Components/Dashboard'
import ResultPage from '../Components/ResultPage'
import QuizPage from '../Components/QuizPage'
import Questions from '../Components/QuizPage'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/quiz' element={<Questions/>} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/results' element={<ResultPage />} />
            </Routes>
        </div>
    )
}

export default MainRoutes