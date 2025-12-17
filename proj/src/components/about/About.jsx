import React from 'react'
import styles from './About.module.scss'
import arrow from '../../assets/icons/arrow-right.svg'

const About = () => {
  return (
    <div className={styles.AboutSection}>
      <div className={styles.AboutText}>
        <button>
          <p>Перейти в каталог</p>
          <img src={arrow} alt="" />
        </button>
        <h1>Изысканные смесители для вашего интерьера</h1>
        <p>Гарантируем высочайшую безопасность и надёжность в соответствии с международными стандартами качества.</p>
      </div>
    </div>
  )
}

export default About