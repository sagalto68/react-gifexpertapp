import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('');
    // const [InputValue, setInputValue] = useState('Hola Mundo'); Sale por defecto Hola Mundo

    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    }

    const handleSubmit = e => {

        e.preventDefault(); // Esto no me queda claro lo que es

        if (InputValue.trim().length > 2) {
            setCategories(cats => [ InputValue, ...cats]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={InputValue}
                onChange={handleInputChange}
            />
        </form>

    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
