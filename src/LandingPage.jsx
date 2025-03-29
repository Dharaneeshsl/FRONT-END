import React from 'react';
import './LandingPage.css';
import GridAnimation from './GridAnimation';
import LoginPage from './LoginPage';
function LandingPage() {
    return (
       <div className='landing-page'>
        <GridAnimation />
            <header className="hero-header">
                <nav className="main-nav">
                    <a href="#" className="logo">Your Logo</a>
                    <ul>
                        <li><button>Home</button></li>
                        <li><button>Login</button></li>
                        <li><button>About</button></li>
                        <li><button>Contact</button></li>
                    </ul>
                </nav>

                <div className="hero-content">
                    <h1>Welcome to Our World</h1>
                    <p>Experience innovation, creativity, and excellence.</p>
                    <button onClick={<LoginPage/>} className="cta-button"  >Get Started</button>
                </div>

                <div className="overlay"></div>
                <div className="glowing-lights">
                    <div className="light"></div>
                    <div className="light"></div>
                    <div className="light"></div>
                </div>
            </header>
            </div>
    );
}

export default LandingPage;