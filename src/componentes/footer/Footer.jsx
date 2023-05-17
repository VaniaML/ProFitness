import style from './Footer.module.css';
import Face from './face.svg';
import Whats from './whats.svg';

export default function Footer() {
  
return (
  
  <div className= {style.footer}>
  <div className= {style.image}>
  <img className= {style.img} src={ Face } alt="Face" />
  <img className= {style.imgn} src={ Whats } alt="Whats" />
  </div>
  <h2>Sobre Nosotros</h2>
  <p>PRO FITNESS,  nuestro club femenil te da la bienvenida, y te invita</p>
  <p>a que hagas realidad tus metas!!</p>
  <p>Contamos con más de 15 disciplinas diferentes y</p>
  <p>horarios accesibles.</p> 
  </div>
  
  )} 