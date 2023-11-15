# Scrimba React Basics: Form 

## Table of Contents
1. [Handling Input Changes](#handling-input-changes)
2. [Managing Multiple Inputs](#managing-multiple-inputs)

## Handling Input Changes

The `onChange` event is triggered by user interactions with the form input. To access the input's current value, the event object is passed to the `onChange` handler, allowing us to update the component's state using the state setter function.

[Watch for Input Changes in React](https://scrimba.com/learn/frontend/watch-for-input-changes-in-react-co1bc45cd92a4e5e4aea7cc45)


Understanding the flow of information in React forms is crucial. There are two key aspects to remember:

1. **Event Trigger**: The `onChange` event is triggered by user interactions with the form input, but by itself, it doesn't provide details about the interaction.
2. **Event Information**: The event object must be passed to the `onChange` handler to access detailed information, such as the value of the input field.


```jsx
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    // Event handler function that receives the `event` object
    function handleChange(event) {
        // `event.target` represents the DOM element the event occurred on
        // `event.target.value` is the value property of that DOM element
        setFirstName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                // `onChange` triggers the `handleChange` function and passes the `event` object
                onChange={handleChange}
            />
        </form>
    )
}
```

## Managing Multiple Inputs

To manage multiple input fields, such as first and last names, we can use separate state variables and handlers for each input. Below is an example of how to track both the first and last name inputs, with a link to a practice exercise:

[Form Inputs Practice](https://scrimba.com/learn/frontend/form-inputs-practice-co5014a2691f7e17ada7501af)

```jsx
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    console.log(firstName, lastName)
    
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
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
