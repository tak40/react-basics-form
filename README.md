# Scrimba React Basics: Form 

## Understanding Event Handling in React Forms

Understanding the flow of information in React forms is crucial. There are two key aspects to remember:

1. **Event Trigger**: The `onChange` event is triggered by user interactions with the form input, but by itself, it doesn't provide details about the interaction.
2. **Event Information**: The event object must be passed to the `onChange` handler to access detailed information, such as the value of the input field.

For a practical demonstration of handling input changes in React, refer to this [Srimba tutorial](https://scrimba.com/learn/frontend/watch-for-input-changes-in-react-co1bc45cd92a4e5e4aea7cc45).


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

This example illustrates how the handleChange function uses the event object to retrieve and set the input field's value in the component's state.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
