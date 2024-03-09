import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Home() {
  return (
    <div className="container mt-5">
      <header className="mb-5">
        <h1 className="text-center">Welcome to SHELL POS</h1>
      </header>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SHELL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inventory">Inventory</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Categories</div>
            <div className="card-body">
              <h5 className="card-title">Manage Product Categories</h5>
              <p className="card-text">Organize your products into categories for easier access and management.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Employees</div>
            <div className="card-body">
              <h5 className="card-title">Employee Management</h5>
              <p className="card-text">Manage your employee profiles, schedules, and access permissions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Inventory</div>
            <div className="card-body">
              <h5 className="card-title">Inventory Tracking</h5>
              <p className="card-text">Keep track of your stock levels, orders, and product information in real time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
