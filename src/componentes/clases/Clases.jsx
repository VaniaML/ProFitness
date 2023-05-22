import Crossfit from './crossfit.jpg';
import Pound from './pound.jpg';
import Combat from './combat.jpg';
import Gap from './gap.jpg';
import Step from './step.jpg';
import style from './Clases.module.css';

export default function Clases () {
  
  return (
    <div className= {style.class}>
    <img className= {style.foto} src={ Crossfit } alt="Crossfit" />
    <img className= {style.foto} src={ Pound } alt="Pound" />
    <img className= {style.foto} src={ Combat } alt="Combat" />
    <img className= {style.foto} src={ Gap } alt="Gap" />
    <img className= {style.foto} src={ Step } alt="Step" />
    </div>
  )}