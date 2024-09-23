import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hanuman from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Skills from './components/Skills';




// function Hanuman(){
//   return(
//     <h1>Jai shree ram</h1>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Hanuman/>
          <Hero />
    <About/>
    <Skills />
    <Projects />
    <Resume/>
    <Contact />
    <ToastContainer/>
    {/* <Footer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
