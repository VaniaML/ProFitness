import Lau from './lau.jpg';
import Diamuertos from './diamuertos.jpg';
import Cross from './cross.jpg';
import Crossfit from './crossfit.jpg';
import Neon from './neon.jpg';
import Step from './step.jpg';
import Crossf from './crossf.jpg';
import Crossfi from './crossfi.jpg';
import Crossft from './crossft.jpg';
import style from './Clases.module.css';

export default function Clases () {
  
  return (
    <div className= {style.class}>
    <img className= {style.foto} src={ Lau } alt="Lau" />
    <img className= {style.foto} src={ Diamuertos } alt="Diamuertos" />
    <img className= {style.foto} src={ Cross } alt="Cross" />
    <img className= {style.foto} src={ Crossfit } alt="Crossfit" />
    <img className= {style.foto} src={ Neon } alt="Neon" />
    <img className= {style.foto} src={ Step } alt="Step" />
    <img className= {style.foto} src={ Crossf } alt="Crossf" />
    <img className= {style.foto} src={ Crossfi } alt="Crossfi" />
    <img className= {style.foto} src={ Crossft } alt="Crossft" />
    </div>
  )}