import {FaGithub,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa'
import React from 'react'
const SwapCardData=
    {
        APY:'123%',
        'Total Staked':'11.53M',
        'Total Value Locked': '$ 301.50K'
    }

const ClamData = {
    Staked:'11.53M',
    Claim: '$ 301.50K'
}

const footData =[
    {
        social:'Github',
        path:'',
        icon:<FaGithub/>
    },
    {
        social:'Twiter',
        path:'',
        icon:<FaTwitter/>
    },
    {
        social:'Telegram',
        path:'',
        icon:<FaTelegram/>
    },
    {
        social:'Discord',
        path:'',
        icon:<FaDiscord/>
    },
]

export  {SwapCardData,ClamData,footData}