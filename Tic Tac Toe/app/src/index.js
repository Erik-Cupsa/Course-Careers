import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css'; // Import Tailwind CSS
import Game from './Game'; // Import the main Game component
import reportWebVitals from './reportWebVitals';

// Render the Game component into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// Measure performance of the app
reportWebVitals();
