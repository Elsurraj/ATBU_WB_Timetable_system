import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import TimeTable from '../../pages/TimeTable'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import LoginTimetable from '../../pages/LoginTimetable'

const Routers = () => {
    return (
        <Routes> 
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/loginTimetable' element={<LoginTimetable />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/timetable' element={<TimeTable/>} />
        </Routes>
    )
}

export default Routers