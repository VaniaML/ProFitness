import Cross from './crossfit.jpg';
import Gap from './gap.jpg';
import Pound from './pound.jpg';
import Circuito from './circuitos.jpg';
import Step from './step.jpg';
import Combat from './combat.jpg';
import Trx from './trx.jpg';
import Jumping from './jumping.jpg';
import Zumba from './zumba.jpg';
import style from './Clases.module.css';

export default function Clases () {
  
  return (
    <div className= {style.class}>
    <div className= {style.lineContainer}>
    	<div className= {style.photoContainer}>	
      		<img  className= {style.foto} src={ Cross } alt="Cross" />
    		<div className= {style.name}>CROSSFIT</div>
 		</div>
		<div className= {style.photoContainer}>
			<img className= {style.foto} src={ Gap } alt="Gap" />
    		<div className= {style.name}>GAP</div>
		</div>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ Pound } alt="Pound" />
    		<div className= {style.name}>POUND</div>
		</div>
    	</div>

   	<div className= {style.lineContainer}>
        	<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Circuito } alt="Circuito" />
            	<div className= {style.name}>CIRCUITOS</div>
			</div>
			<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Step } alt="Step" />
           	 <div className= {style.name}>STEP</div>
			</div>
			<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Combat } alt="Combat" />
           		<div className= {style.name}>COMBAT</div>
	  		</div>
    </div>

    	<div className= {style.lineContainer}>
          <div className= {style.photoContainer}>
     		<img className= {style.foto} src={ Trx } alt="Trx" />
            <div className= {style.name}>TRX</div>
		</div>
		<div className= {style.photoContainer}>
   		 	<img className= {style.foto} src={ Jumping } alt="Jumping" />
            <div className= {style.name}>JUMPING</div>
		</div>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ Zumba } alt="Zumba" />
            <div className= {style.name}>ZUMBA</div>
		</div>
    	</div>
		</div>

  )}