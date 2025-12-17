import React from 'react'
import styles from './Company.module.scss'
import BlueButton from '../BlueButton/BlueButton'
import pic1 from '../../assets/company/1.png'
import pic2 from '../../assets/company/2.png'
import {company} from '../../data.js'

const Company = () => {
  return (
    <section className={styles.companySection}>
        <div className={styles.companyImages}>
          <img className={styles.companyPic} src={pic2} alt="" />
          <img className={styles.companyBg} src={pic1} alt="" />
        </div>
        <div className={styles.companyText}>
          <h2>О компании</h2>
          <p>{company.p1}</p>
          <span>{company.quote}</span>
          <p>{company.p2}</p>
          <BlueButton name="Подробнее"/>
        </div>
    </section>
  )
}

export default Company