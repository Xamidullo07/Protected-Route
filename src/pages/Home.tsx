import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, LogIn } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="nav-brand">
          <HomeIcon size={24} />
          <h1>My App</h1>
        </div>
        <button onClick={() => navigate('/login')} className="login-link">
          <LogIn size={20} />
          Login
        </button>
      </nav>
      <main className="home-content">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing products and services</p>
        <button onClick={() => navigate('/login')} className="cta-button">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;