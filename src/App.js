import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Tarjeta from './components/Tarjeta'
import Empleados from './components/Empleados'
import Numeros from './components/Numeros'
import Digitos from './components/Digitos'



function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/" exact component={Tarjeta}/>
        <Route path="/empleados" component={Empleados}/>
        <Route path="/numeros" component={Numeros}/>
        <Route path="/digitos" component={Digitos}/>
      </div>
    </Router>
  );
}

export default App;
