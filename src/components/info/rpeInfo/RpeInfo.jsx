import React from 'react'
import {
  rpeAndPulse,
  rpeTable,
  rpeTermin,
} from '../../../assets/data/rpe'

import styles from './RpeInfo.module.css'

const RpeInfo = () => {
  return (
    <div className={styles.rpe}>
      <p className={styles.description}>{rpeTermin}</p>
      <h3 className={styles.title}>Таблица RPE</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={`${styles.subtitle} ${styles.rating}`}>Индекс</span>
          <span className={`${styles.subtitle} ${styles.stress}`}>
            Воспринимаемая нагрузка
          </span>
        </li>
        {rpeTable.map((elem) => {
          return (
            <li className={styles.item}>
              <span className={`${styles.description} ${styles.rating}`}>
                {elem.rating}
              </span>
              <span className={`${styles.description} ${styles.stress}`}>
                {elem.stress}
              </span>
            </li>
          )
        })}
      </ul>

      <h3 className={styles.title}>Пульсовые зоны и RPE</h3>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={`${styles.subtitle} ${styles.zone}`}>Пульсовая зона</span>
          <span className={`${styles.subtitle} ${styles.rpe_zone}`}>
            Воспринимаемая нагрузка (RPE)
          </span>
          <span className={`${styles.subtitle} ${styles.breath}`}>Дыхание</span>
          <span className={`${styles.subtitle} ${styles.talk}`}>Возможность разговора</span>
        </li>
        {rpeAndPulse.map((elem) => {
          return (
            <li className={styles.item}>
              <span className={`${styles.description} ${styles.zone}`}>
                {elem.zone}
              </span>
              <span className={`${styles.description} ${styles.rpe_zone}`}>
                {elem.rpe}
              </span>
              <span className={`${styles.description} ${styles.breath}`}>
                {elem.breath}
              </span>
              <span className={`${styles.description} ${styles.talk}`}>
                {elem.talk}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RpeInfo
