import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// import '../ssets/css/bootstrap.min.css'
// import '../assets/css/elegant-icons.css'
// import '../assets/css/font-awesome.min.css'
// import '../assets/css/jquery-ui.min.css'
// import '../assets/css/nice-select.css'
// import '../assets/css/owl.carousel.min.css'
// import '../assets/css/slicknav.min.css'
// import '../assets/css/style.css'
// import '../assets/css/themify-icons.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
