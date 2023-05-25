import Face from './face.svg';
import Whats from './whats.svg';
import style from './Footer.module.css';

export default function Footer() {
  
return (
  
  <div className= {style.footer}>
  <div className= {style.image}>
  <a href="https://www.facebook.com/profile.php?id=100082158084885" target="_blank" rel="noopener noreferrer">
  <img className= {style.img} src={ Face } alt="Face" />
  <p className= {style.face}>Pro Fitness</p>
  </a>
  <img className= {style.imgn} src={ Whats } alt="Whats" />
  <p className= {style.num}>+52 553132 4291</p>
  </div>
  <h2>Sobre Nosotros</h2>
  <p>PRO FITNESS,  nuestro club femenil te da la bienvenida, y te invita</p>
  <p>a que hagas realidad tus metas!!</p>
  <p>Contamos con más de 15 disciplinas diferentes y</p>
  <p>horarios accesibles.</p> 
  </div>
  
  )} 