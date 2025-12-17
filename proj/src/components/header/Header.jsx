import React from 'react'
import styles from './Header.module.scss'
import user from '../../assets/icons/user.svg'
import logo from '../../assets/logo.svg'
import search from '../../assets/icons/search.svg'
import sale from '../../assets/icons/sale.svg'
import cart from '../../assets/icons/shopping-cart.svg'
import BlueButton from '../BlueButton/BlueButton'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.topHeader}>
        <div>
            <ul>
              <li>
                  О компании
              </li>
              <li>
                Оплата и доставка
              </li>
              <li>
                Магазины
              </li>
              <li>
                Контакты
              </li>
            </ul>
            <button>
              <img src={user} alt="" />
              <p>Личный кабинет</p>
            </button>
        </div>
      </div>
      <ul className={styles.centerHeader}>
        <img src={logo} alt="" />
        <form action="">
          <input type="text" placeholder='    Поиск по сайту...'/>
          <button><img src={search} alt="" /></button>
        </form>
        <div>
          <h5>+7 999 999-99-99</h5>
          <p>
            Звоните с 8:10 до 18:10
          </p>
        </div>
        <BlueButton name="Заказать звонок"/>
      </ul>
      <div className={styles.bottomHeader}>
        <div>
            <ul>
              <li className={styles.sales_li}>
                <img src={sale} alt="" />
                <p>Акции</p>
              </li>
            <li>Смесители</li>
            <li>Душевые системы</li>
            <li>Душевые стойки</li>
            <li>Изливы</li>
            <li>Аксессуары</li>
          </ul>
          <button>
            <img src={cart} alt="" />
            <p>Корзина</p>
          </button>
        </div>
        
        
      </div>
    </header>
  )
}

export default Header