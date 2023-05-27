import Gimnasia from './gimnasia.jpg';
import Jazz from './jazz.jpg';
import CrossInf from './crossinf.jpg';
import Auri from './auri.jpg';
import style from './Otroserv.module.css';

export default function OtroServ () {
  
  return (
    <div className= {style.class}>
    <div className= {style.lineContainer}>
    	<div className= {style.photoContainer}>	
      		<img  className= {style.foto} src={ Gimnasia } alt="Gim" />
    		<div className= {style.name}>GIMNASIA</div>
 		</div>
		<div className= {style.photoContainer}>
			<img className= {style.foto} src={ Jazz } alt="Jazz" />
    		<div className= {style.name}>JAZZ</div>
		</div>

	<div className= {style.lineContainer}>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ CrossInf } alt="Cross" />
    		<div className= {style.name}>CROSS INF</div>
		</div>
		<div className= {style.photoContainer}>
    		<img className= {style.foto} src={ Auri } alt="Auri" />
    		<div className= {style.name1}>AURICULOTERAPIA</div>
		</div>
    	</div>
		</div>
	</div>
  
  )} 