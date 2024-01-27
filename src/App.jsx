import React, { useState } from 'react';
import { UserForm } from './UserForm';
import { UserDisplay } from './UserDisplay';
const App = () => {
    const [user, setUser] = useState({ name: '', age: '' });

    const handleSave = (newUser) => {
        setUser(newUser);
    };

    return (
        <div>
            <UserForm onSave={handleSave} />
            <UserDisplay user={user} />
        </div>
    );
};

export default App;
