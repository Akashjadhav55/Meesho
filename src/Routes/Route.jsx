import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../components/Home/Home'

export default function RouteElement() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        {/* <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route>
        <Route path='/' element={} ></Route> */}
      </Routes>
    </div>
  )
}
