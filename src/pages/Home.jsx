import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}

export default Home