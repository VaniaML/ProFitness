import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg';
import Home from '../home/Home.jsx';
import Clases from '../clases/Clases.jsx';
import OtroServ from '../otroServ/Otroserv.jsx';
import style from './NavBar.module.css';

export default function NavBar() {
   
return(
  
  <div className= {style.NavBar}>
  
  	<Link to='/profitness'>
  <img className= {style.logo} src={ Logo } alt="Logo" />
    </Link>
    
    <Link to='/clases'>
  <button className={style.btn}>Clases</button>
	</Link>

	<Link to='/otroServ'>
  <button className= {style.btn}>Otros Servicios</button>
 	</Link>

  </div>
  
  )}