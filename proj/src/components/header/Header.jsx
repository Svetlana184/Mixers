import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.topHeader}>
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
          <img src="" alt="" />
          <p>Личный кабинет</p>
        </button>
      </div>
      <ul className={styles.centerHeader}>
        <img src="" alt="" />
        <form action="">
          <input type="text" placeholder='    Поиск по сайту...'/>
        </form>
        <div>
          <h5>+7 999 999-99-99</h5>
          <p>
            Звоните с 8:10 до 18:10
          </p>
        </div>
        <button>Заказать звонок</button>
      </ul>
      <div className={styles.bottomHeader}>
        <div>
            <ul>
              <li>Акции</li>
            <li>Смесители</li>
            <li>Душевые системы</li>
            <li>Душевые стойки</li>
            <li>Изливы</li>
            <li>Аксессуары</li>
          </ul>
          <button>
            <img src="" alt="" />
            <p>Корзина</p>
          </button>
        </div>
        
        
      </div>
    </header>
  )
}

export default Header