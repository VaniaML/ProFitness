import Logo from './logo.jpg';
import style from './NavBar.module.css';

export default function NavBar() {
  
return(
  
  <div className= {style.NavBar}>
  <img className= {style.logo} src={ Logo } alt="Logo" />
  <button className= {style.btn}>Clases</button>
  <button className= {style.btn}>Otros Servicios</button>
  </div>
  
  )}