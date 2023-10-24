import { createContext, useState } from 'react';
import { ethers } from "ethers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

export const WalletContext = createContext();

const StakingContext = ({children}) => {
    const [address, setAddress] = useState(null);
    const [checkConnect, setCheckConnect] = useState(true);

    const ConnectAccount = async () => { 
        console.log('click') 
        try {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });

                if (accounts.length > 0) {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const ownerAddress = await signer.getAddress();
                    setAddress(ownerAddress);
                    setCheckConnect(false);
                    toast(`Connected to MetaMask with ownerAddress: ${ownerAddress.substring(0,20)}`);
                } else {
                    toast('User denied account access');
                }
            } else {
                toast('Please install MetaMask to use this feature.');
            }
        } catch (error) {
            console.error(error);
            toast('An error occurred while connecting to MetaMask.');
        }
    };

    const DisconnectAccount = () => {
        setAddress(null);
        setCheckConnect(true);
        toast('Wallet disconnected.');
    }

    return (
        <WalletContext.Provider value={{ h1: 'fooly', ConnectAccount, DisconnectAccount, address, checkConnect }}>
            <ToastContainer />
            {children}
        </WalletContext.Provider>
    )
}

export default StakingContext;

// import React, { createContext, useState } from 'react';
// import { ethers } from 'ethers';

// export const WalletContext = createContext();

// const StakingContext = ({ children }) => {
//   const [address, setAddress] = useState(null);

//   const ConnectAccount = async () => {
//     console.log('click');
//     if (typeof window.ethereum !== 'undefined') {
//         await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setAddress(address)
//         alert(`Connected to MetaMask with address: ${address}`);
//       } else {
//         alert('Please install MetaMask to use this feature.');
//       }
//   };



//   return (
//     <WalletContext.Provider value={{ h1:'folly',ConnectAccount }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export default StakingContext;

// import React, { createContext, useState } from 'react';
// import { ethers } from 'ethers';

// export const WalletContext = createContext();

// const StakingContext = ({ children }) => {
//   const [address, setAddress] = useState(null);

//   const ConnectAccount = async () => {
//     console.log('click');
//     try {
//       if (typeof window.ethereum !== 'undefined') {
//         const accounts = await window.ethereum.request({
//           method: 'eth_requestAccounts'
//         });

//         if (accounts.length > 0) {
//           const provider = new ethers.providers.Web3Provider(window.ethereum);
//           const signer = provider.getSigner();
//           const address = await signer.getAddress();
//           setAddress(address);
//           alert(`Connected to MetaMask with address: ${address}`);
//         } else {
//           alert('User denied account access');
//         }
//       } else {
//         alert('Please install MetaMask to use this feature.');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while connecting to MetaMask.');
//     }
//   };



//   return (
//     <WalletContext.Provider value={{ address, ConnectAccount,h1:'folly' }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export default StakingContext;





 // const { ethereum } = window;
        // if (!ethereum) {
        //   alert("Get MetaMask!");
        //   return;
        // }
        // const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        // console.log("Connected", accounts[0]);


        //   try {

    //         const provider = new ethers.providers.Web3Provider(window.ethereum)
    //         await provider.send("eth_requestAccounts", []);
    //         const signer = provider.getSigner()
       
    //   } catch (error) {
    //     console.log(error);
    //   }
