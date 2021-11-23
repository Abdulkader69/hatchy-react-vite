import React from 'react';
import ReactDOM from 'react-dom';
import './components/assets/index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';

ReactDOM.render(
  <>
    <div className="page-container">
      <Header />
      <Landing />
      <Footer />
    </div>
  </>,
  document.getElementById('root')
);