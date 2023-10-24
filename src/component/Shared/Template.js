import React from 'react'
import { Stack } from 'react-bootstrap'

const Template = ({children, title}) => {
    return (
        <Stack>
            <h1 style={{

                backgroundImage: 'linear-gradient(to right, red, red 50%, transparent 50%, transparent)',
                backgroundSize: '100% 3px',
                backgroundPosition: '0 100%',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'content-box'
            }}>
                {title}
            </h1>
            {children}
        </Stack>
    )
}

export default Template
