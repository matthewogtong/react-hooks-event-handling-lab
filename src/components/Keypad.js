// Code Keypad Component Here
import React from 'react'

const Keypad = () => {

    const handlePasswordChange = () => {
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={handlePasswordChange} />
    )
}

export default Keypad