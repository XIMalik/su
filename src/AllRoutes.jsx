import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Test from './Pages/Bio'

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route exact path='test-route' element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes