import Logo from './logo.jpg';
import style from './NavBar.module.css';

export default function NavBar() {
  
return(
  
  <div className= {style.barra}>
  <img className= {style.logo} src={ Logo } alt="Logo" />
  <button>Clases</button>
  <button>Servicios Adicionales</button>
  </div>
  
  )}