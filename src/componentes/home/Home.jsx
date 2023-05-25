import React from 'react';
import Gym from './gym.mp4';
import style from './Home.module.css';

export default function Home() {
  
return (
  
  <div className= {style.home}>
  <video className= {style.video} controls>
  <source src={Gym} type="video/mp4" />
  </video>
  </div>

  )}