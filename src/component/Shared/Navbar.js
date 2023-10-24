import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { WalletContext} from './StakingContext';
import {FaWallet} from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import WalletButton from './WalletButton'
import React from 'react'
function NavBar() {
  const {h1,ConnectAccount,address,DisconnectAccount,checkConnect}=useContext(WalletContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">foll:{h1}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link
          as={NavLink}
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "blue" }
          }
        >
          Stake
        </Nav.Link>
        <Nav.Link
        as={NavLink}
        to="/swap"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "blue" }
        }
      >
        Swap
      </Nav.Link>
      {
        checkConnect ?
        <WalletButton content='connect wallet' className='connect' click={ConnectAccount}/>
        :<WalletButton content={<span >{address.slice(0,10)} <FaWallet/></span>} className='connect' click={DisconnectAccount}/>
      }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


// {
//   checkConnect ?
//   <WalletButton content='connect wallet' className='connect' click={DisconnectAccount} />
//   :
//   <WalletButton click={ConnectAccount} content=<span>{address.slice(0,10)} <FaWallet/></span> className='connect' />
// }