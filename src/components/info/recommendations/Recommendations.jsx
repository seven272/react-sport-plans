import React from 'react'

import { recommendations } from '../../../assets/data/recommendations'
import styles from './Recommendations.module.css'

const Recommendations = () => {
    const arrRecomendation = [...recommendations]
  return (
    <div className={styles.recommendations}>
        {arrRecomendation.map((elem) => {
        return (
          <div className={styles.wrapper} key={elem.title}>
            <h3 className={styles.subtitle}>{elem.title}</h3>
            <span className={styles.description}>{elem.descr}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Recommendations