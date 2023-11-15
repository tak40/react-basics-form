/** @format */

import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    console.log(firstName)
    console.log(lastName)

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}

export default Form
