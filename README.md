<!-- @format -->

# Scrimba React Basics: Form

## Table of Contents

1. [Handling Input Changes](#handling-input-changes)
2. [Managing Multiple Inputs](#managing-multiple-inputs)
3. [Using a State Object for Form Data](#using-a-state-object-for-form-data)
4. [Controlled Inputs](#controlled-inputs)
5. [Handling `<textarea />` in React Forms](#handling-textarea--in-react-forms)
6. [Implementing Checkboxes in React Forms](#implementing-checkboxes-in-react-forms)
7. [Handling Radio Buttons in React Forms](#handling-radio-buttons-in-react-forms)

## Handling Input Changes

The `onChange` event is triggered by user interactions with the form input. To access the input's current value, the event object is passed to the `onChange` handler, allowing us to update the component's state using the state setter function.

[Watch for Input Changes in React](https://scrimba.com/learn/frontend/watch-for-input-changes-in-react-co1bc45cd92a4e5e4aea7cc45)

Understanding the flow of information in React forms is crucial. There are two key aspects to remember:

1. **Event Trigger**: The `onChange` event is triggered by user interactions with the form input, but by itself, it doesn't provide details about the interaction.
2. **Event Information**: The event object must be passed to the `onChange` handler to access detailed information, such as the value of the input field.

```jsx
import React from 'react'

export default function Form() {
    const [firstName, setFirstName] = React.useState('')

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
import React from 'react'

export default function Form() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')

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

## Using a State Object for Form Data

Consolidating the state into a single state object is a more scalable approach, especially as forms grow in complexity. The `handleChange` function dynamically updates the state based on the input's `name` attribute, using the event object.

#### State as an Object

-   **Scalability**: Using a single state object to store all form input values makes the component more scalable and easier to manage.
-   **Example**: `const [formData, setFormData] = useState({ firstName: '', lastName: '' })`

#### Common handleChange Function

-   **Reusable Logic**: A common `handleChange` function is used for all inputs to handle changes and update the state.
-   **Dynamic Property Update**: The function dynamically updates the correct property in the state object based on the `name` attribute of the input element.

#### Name Attribute

-   **Key Identifier**: The `name` attribute corresponds to the property names in the state object, serving as a key to identify which part of the state needs to be updated.

#### Dynamic Key with Square Brackets

-   **Computed Property Names**: The square brackets `[]` in `[event.target.name]` are not denoting an array. Instead, they are used to set an object key based on a variable's value, known as computed property names in JavaScript.

#### Arrow Function for State Update

-   **Current State Reference**: The arrow function ensures that the state update function uses the most current state.
-   **Functional Update**: Using `prevFormData => {...}` as a functional update is crucial when the new state depends on the old state.

[Forms State Object](https://scrimba.com/learn/frontend/forms-state-object-co4014fe8a23d6c6d376747ca)

```jsx
import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({ firstName: '', lastName: '' })

    console.log(formData)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
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
        </form>
    )
}

export default Form
```

## Controlled Inputs

In React, controlled inputs are a way to ensure the form elements like `<input>`, `<textarea>`, and `<select>` maintain their values in the component's state. By setting the `value` attribute of these form elements to a state variable, React becomes the "single source of truth," managing the input's value. This setup means:

-   User input triggers an `onChange` event.
-   The event handler updates the React state with the user's input.
-   The input's value is set to reflect the updated React state.

This approach ensures the input field's value is always synchronized with the React state, preventing discrepancies and making the state the sole source of truth for the input value.

[Controlled Inputs](https://scrimba.com/learn/frontend/controlled-inputs-co5c7481f910db53cc421f020)

Here is a code example demonstrating controlled inputs:

```jsx
import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
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
        </form>
    )
}
```

## Handling `<textarea />` in React Forms

In React, `<textarea />` elements are used similarly to `<input />` elements to maintain their state. Although `<textarea>` is not self-closing in HTML, in JSX, we use the self-closing tag syntax for convenience and consistency with other input elements. The `value` of the `<textarea />` is controlled by a state variable, which ensures the text area remains in sync with the state.

[Forms in React: Textarea](https://scrimba.com/learn/frontend/forms-in-react-textarea-cob6a41f7a22250f5f9bdf71e)

Here's how you can use `<textarea />` in a controlled manner:

```jsx
import React from 'react'

export default function Form() {
    // ...existing state and handleChange function

    return (
        <form>
            {/* ...existing inputs */}
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
        </form>
    )
}
```

## Implementing Checkboxes in React Forms

This section covers integrating checkboxes into React forms and the associated changes in handling form state.

[Forms in React: Checkbox](https://scrimba.com/learn/frontend/forms-in-react-checkbox-cob6a41f7a22250f5f9bdf71e)

### `htmlFor` in JSX

In JSX, the `htmlFor` attribute is used instead of the `for` attribute to link a `<label>` to an `<input>` element. This is due to `for` being a reserved word in JavaScript.

### Checkbox State

A checkbox input's state is managed with a boolean value, allowing React to control its checked state.

### Object Destructuring in Event Handling

Object destructuring improves code readability by extracting multiple properties from an object in a single statement. In `handleChange`, destructuring is used to pull `name`, `value`, `type`, and `checked` from `event.target`.

#### Before Object Destructuring:

```jsx
function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]:
                event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
        }
    })
}
```

#### After Object Destructuring:

```jsx
function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }
    })
}
```

### Conditional State Update

The function updates the state differently based on the input `type`. For checkboxes, the `checked` property is used instead of `value`.

### Code Example with Conditional Rendering

```jsx
function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }
    })
}
```

## Handling Radio Buttons in React Forms

1. **Initial State with Strings**: Radio buttons are initiated with string values, allowing identification of the selected option.

2. **User Interaction**: Clicking a radio button triggers an event.

3. **Event Handling**: The event's details, accessible via `event.target`, inform the state setter function.

4. **State Update**: The state updates based on the `name` attribute and the selected radio button's value.

5. **Conditional Rendering in State Update**: The state is updated by evaluating the `type` of the input (checkbox or radio button) and using the `value` attribute for radio buttons.

6. **Importance of `value` and `checked`**: For functional radio buttons in React, both `value` (which option is selected) and `checked` (if it is selected) properties are essential.

7. **React as the Single Source of Truth**: Managing the form state in React, including radio buttons, ensures React is the single source of truth for the application's behavior.

````jsx
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
```




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
````
