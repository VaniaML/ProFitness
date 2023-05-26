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
    <div className= {style.lineContainer}>
    	<div className= {style.photoContainer}>	
      		<img  className= {style.foto} src={ Lau } alt="Lau" />
    		<div className= {style.name}>GAP</div>
 		</div>
		<div className= {style.photoContainer}>
			<img className= {style.foto} src={ Diamuertos } alt="Diamuertos" />
    		<div className= {style.name}>COMBAT</div>
		</div>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ Cross } alt="Cross" />
    		<div className= {style.name}>CIRCUITOS</div>
		</div>
    	</div>

   	<div className= {style.lineContainer}>
        	<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Crossfit } alt="Crossfit" />
            	<div className= {style.name}>COMBAT</div>
			</div>
			<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Neon } alt="Neon" />
           	 <div className= {style.name}>CROSSFIT</div>
			</div>
			<div className= {style.photoContainer}>
            	<img className= {style.foto} src={ Step } alt="Step" />
           		<div className= {style.name}>STEP</div>
	  		</div>
    </div>

    	<div className= {style.lineContainer}>
          <div className= {style.photoContainer}>
     		<img className= {style.foto} src={ Crossf } alt="Crossf" />
            <div className= {style.name}>GAP</div>
		</div>
		<div className= {style.photoContainer}>
   		 	<img className= {style.foto} src={ Crossfi } alt="Crossfi" />
            <div className= {style.name}>CIRCUITOS</div>
		</div>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ Crossft } alt="Crossft" />
            <div className= {style.name}>CROSSFIT</div>
		</div>
    	</div>
		</div>

  )}