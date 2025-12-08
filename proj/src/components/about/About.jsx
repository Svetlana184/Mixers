import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.AboutSection}>
      <div className={styles.AboutText}>
        <button>Перейти в каталог</button>
        <h1>Изысканные смесители для вашего интерьера</h1>
        <p>Гарантируем высочайшую безопасность и надёжность в соответствии с международными стандартами качества.</p>
      </div>
    </div>
  )
}

export default About