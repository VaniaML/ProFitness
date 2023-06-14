import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './componentes/navBar/Navbar.jsx';
import Home from './componentes/home/Home.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Clases from './componentes/clases/Clases.jsx';
import OtroServ from './componentes/otroServ/Otroserv.jsx';

function App() {
  
  return (
    
    <BrowserRouter>
    <div>
    <NavBar />
    <Switch>
    <Route exact path='/profitness' component={Home}></Route>
      <Route exact path='/clases' component={Clases}></Route>
		<Route exact path='/otroServ' component={OtroServ}></Route>
      </Switch>
    <Footer />
      </div>
    </BrowserRouter>
	
)}

export default App;