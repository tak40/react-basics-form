/** @format */

import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: '',
        favAgent: '',
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="name">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
            </div>
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />

            <label htmlFor="isFriendly" className='friendly-text'>
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                Are you friendly?
            </label>

            <fieldset>
                <legend>Current employment status</legend>
                <label htmlFor="unemployed">
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === 'unemployed'}
                        onChange={handleChange}
                    />
                    Unemployed
                </label>
                <br />
                <label htmlFor="part-time">
                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === 'part-time'}
                        onChange={handleChange}
                    />
                    Part-time
                </label>
                <br />
                <label htmlFor="full-time">
                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === 'full-time'}
                        onChange={handleChange}
                    />
                    Full-time
                </label>
                <br />
            </fieldset>

            <label htmlFor="favColor" className='favColor'>What is your favorite color?</label>
            <select
                name="favColor"
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">-- Please choose a color --</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default Form
