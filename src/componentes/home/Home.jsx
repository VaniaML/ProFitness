import React from 'react';
import Lau from './lau.jpg';
import Diamuertos from './diamuertos.jpg';
import Cross from './cross.jpg';
import Crossfit from './crossfit.jpg';
import Neon from './neon.jpg';
import Step from './step.jpg';
import Crossf from './crossf.jpg';
import Crossfi from './crossfi.jpg';
import Crossft from './crossft.jpg';
import Gym from './gym.mp4';
import style from './Home.module.css';

export default function Home() {
  
return (
  
  <div className= {style.home}>
  <img className= {style.img} src={ Lau } alt="Lau" />
  <img className= {style.img} src={ Diamuertos } alt="Diamuertos" />
  <img className= {style.img} src={ Cross } alt="Cross" />
  <img className= {style.img} src={ Crossfit } alt="Crossfit" />
  <img className= {style.img} src={ Neon } alt="Neon" />
  <img className= {style.img} src={ Step } alt="Step" />
  <img className= {style.img} src={ Crossf } alt="Crossf" />
  <img className= {style.img} src={ Crossfi } alt="Crossfi" />
  <img className= {style.img} src={ Crossft } alt="Crossft" />
  <video controls>
  <source src="./gym.mp4" type="video/mp4" />
  </video>
  </div>

  )}