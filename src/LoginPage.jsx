import React, { useState } from 'react';
import './LoginPage.css'; // Create this CSS file

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log('Password:', password);

      
        if (email === 'demo@example.com' && password === 'password') {
          alert('Login successful!'); // Replace with redirection or state update
        } else {
          alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <div className="left-section">
                <div className="logo"></div>
                <div className="slogan">
                    Be a Part of
                    <br />
                    Something Beautiful
                </div>
            </div>
            <div className="right-section">
                <div className="login-form">
                    <h2>Login</h2>
                    <p className="description">Enter your credentials to access your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="yourmail@gmail.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group remember-me">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="create-account">
                        Not a member? <a href="#">Create an account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;