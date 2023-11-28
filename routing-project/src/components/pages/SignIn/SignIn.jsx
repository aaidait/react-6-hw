import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div>
            <h2>Sign In</h2>
            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="button">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
