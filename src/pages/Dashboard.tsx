import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Package, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <LayoutDashboard size={24} />
          <h1>Dashboard</h1>
        </div>
        <div className="nav-links">
          <button onClick={() => navigate('/products')} className="nav-button">
            <Package size={20} />
            Products
          </button>
          <button onClick={() => {
            logout();
            navigate('/login');
          }} className="nav-button logout">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </nav>
      <main className="dashboard-content">
        <h2>Welcome to Dashboard</h2>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Products</h3>
            <p>150</p>
          </div>
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>$12,450</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>45</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;