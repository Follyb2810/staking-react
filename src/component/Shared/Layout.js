import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container fluid="sm" style={{ flex: 1 }}>
                <NavBar/>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout