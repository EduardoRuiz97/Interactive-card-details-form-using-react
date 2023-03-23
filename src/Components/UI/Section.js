import React from "react";
import CardImg from  '../../images/bg-card-back.png';
import styles from './Section.module.css';
import Card from "./Card/Card";


const Section = (props) => {

  return  (
    <section className={styles['card-section']}>
      <img src={CardImg} alt={'card'} ></img>
      <Card cardInfo={props.cardInfo}/>
    </section>
  )
}

export default Section;