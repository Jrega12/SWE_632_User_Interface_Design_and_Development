import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//i



import { Button} from 'react-bootstrap';

import App from './App';
//import Home from '../components/Home';
//import reportWebVitals from './reportWebVitals';


<Button variant="btn btn-success" onClick={() => ('../components/Home')}>Click button to view products</Button>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
