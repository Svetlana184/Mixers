import React from 'react'
import BlueButton from '../BlueButton/BlueButton'
import styles from './Sales.module.scss'
import {sales} from '../../data.js'

const Sales = () => {
  const cards = sales.map(item => 
  <li key={item.id}>
    <img src={item.img} alt="" />
    <div>
      <span>Акция действует до {item.date}</span>
      <h6>{item.title}</h6>
      <p>{item.desc}</p>
      <p>Подробнее</p>
    </div>
  </li>)
  return (
    <section className={styles.salesSection}>
      <div>
        <h2>Актуальные акции</h2>
        <BlueButton name="Все акции"/>
      </div>
      <ul>
        {cards}
      </ul>
    </section>
  )
}

export default Sales