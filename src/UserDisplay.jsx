import React from 'react';

export const UserDisplay = ({ user }) => {
    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};
