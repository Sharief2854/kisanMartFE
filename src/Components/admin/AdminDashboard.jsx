import React from 'react'
import NavBar from './landingPage/NavBar'
import Header from './landingPage/Header'
import styles from './AdminDashboard.module.css' 
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <NavBar/>
        <div style={{flexGrow:1 }}>
          <Outlet/>
        </div>
      </div>
      
    </div>
  )
}



export default AdminDashboard