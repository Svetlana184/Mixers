import React from 'react'
import {categories} from '../../data.js'
import styles from './Categories.module.scss' 
import arrow from '../../assets/icons/arrow-cat.svg'

const Categories = () => {
  const cats = categories.map(item =>
  <div 
      key={item.id}
      className={`${styles[`category_${item.id}`]}`}
    >
      <img src={item.img} alt={item.name}/>
      <div className={styles.content}>
        <h5>{item.name}</h5>
        <div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>)
  return (
    <section className={styles.cat_section}>
      <div className={styles.four_sec}>
        {cats.slice(0,4)}
      </div>
        {cats.at(4)}
    </section>
  )
}

export default Categories