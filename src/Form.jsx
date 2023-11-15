/** @format */

import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [firstName, setFirstName] = useState('')

    console.log(firstName)

    function handleChange(event) {
        setFirstName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}

export default Form
