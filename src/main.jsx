import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Profile from './Profile.jsx'; // Assuming your profile component is in Profile.jsx
import Contact from './Contact.jsx'; // Assuming your contact component is in Contact.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {' '}
        {/* Replaced Router with Routes for better route definition */}
        <Route path="/" element={<App />} />{' '}
        {/* Route for the main app */}
        <Route path="/profile" element={<Profile />} />{' '}
        {/* Route for profile page */}
        <Route path="/contact" element={<Contact />} />{' '}
        {/* Route for contact page */}
      </Routes>
    </Router>
  </React.StrictMode>
);
