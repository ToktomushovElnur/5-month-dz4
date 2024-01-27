import React, { useReducer } from 'react';

const initialState = { name: '', age: '' };

function userReducer(state, action) {
    switch (action.type) {
        case 'update':
            return { ...state, [action.field]: action.value };
        default:
            throw new Error();
    }
}

export const UserForm = ({ onSave }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: 'update', field: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={state.name} onChange={handleChange} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={state.age} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};
