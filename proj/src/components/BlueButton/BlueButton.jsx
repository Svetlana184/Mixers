import React from 'react'
import styles from './BlueButton.module.scss'

const BlueButton = ({name}) => {
  return (
    <button className={styles.blueButton} >{name}</button>
  )
}

export default BlueButton