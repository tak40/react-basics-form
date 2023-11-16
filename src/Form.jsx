/** @format */

import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        valorant: true,
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

    return (
        <form>
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
            <input
                type="checkbox"
                id="valorant"
                checked={formData.valorant}
                onChange={handleChange}
                name="valorant"
            />
            <label htmlFor="valorant">Are you gonna be the match MVP?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === 'unemployed'}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === 'part-time'}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === 'full-time'}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>

            <label htmlFor="favAgent">Who is your favorite Valorant agent?</label>
            <select
                name="favAgent"
                id="favAgent"
                value={formData.favAgent}
                onChange={handleChange}
            >
                <option value="">-- Please choose an agent --</option>
                <option value="jett">Jett</option>
                <option value="raze">Raze</option>
                <option value="phoenix">Phoenix</option>
                <option value="sage">Sage</option>
                <option value="sova">Sova</option>
                <option value="viper">Viper</option>
                <option value="cypher">Cypher</option>
                <option value="brimstone">Brimstone</option>
                <option value="omen">Omen</option>
                <option value="breach">Breach</option>
                <option value="reyna">Reyna</option>
                <option value="killjoy">Killjoy</option>
                <option value="skye">Skye</option>
                <option value="yoru">Yoru</option>
                <option value="astra">Astra</option>
                <option value="kayo">Kayo</option>
                <option value="chamber">Chamber</option>
                <option value='harbor'>Harbor</option>
                <option value='deadlock'>Deadlock</option>
                <option value='iso'>Iso</option>
            </select>
        </form>
    )
}

export default Form
