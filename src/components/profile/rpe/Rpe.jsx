import React from 'react'
import { Link } from 'react-router-dom'
import { GoQuestion } from 'react-icons/go'

import styles from './Rpe.module.css'
import { rpeAndPulse } from '../../../assets/data/rpe'

const Rpe = () => {
  const arrColors = [
    '#c4c0c0',
    '#4794ff',
    '#4cbb17',
    '#fff44f',
    '#ff2b2b',
  ]
  return (
    <div className={styles.rpe}>
      <h3 className={styles.title}>Пульсовые зоны и RPE</h3>
      <Link to="/info" className={`${styles.link}`}>
        <span>Подробнее про RPE</span>
        <GoQuestion size={15} />
      </Link>
      <ul className={styles.items}>
        <li className={styles.item}>
          <span className={`${styles.subtitle} ${styles.zone}`}>
            Пульсовая зона
          </span>
          <span className={`${styles.subtitle} ${styles.rpe_zone}`}>
            Воспринимаемая нагрузка (RPE)
          </span>
          <span className={`${styles.subtitle} ${styles.breath}`}>
            Дыхание
          </span>
          <span className={`${styles.subtitle} ${styles.talk}`}>
            Возможность разговора
          </span>
        </li>
        {rpeAndPulse.map((elem, inx) => {
          return (
            <li
              className={styles.item}
              style={{ backgroundColor: arrColors[inx] }}
            >
              <span
                className={`${styles.description} ${styles.zone}`}
              >
                {elem.zone}
              </span>
              <span
                className={`${styles.description} ${styles.rpe_zone}`}
              >
                {elem.rpe}
              </span>
              <span
                className={`${styles.description} ${styles.breath}`}
              >
                {elem.breath}
              </span>
              <span
                className={`${styles.description} ${styles.talk}`}
              >
                {elem.talk}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Rpe
