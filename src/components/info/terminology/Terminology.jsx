import React from 'react'

import styles from './Terminology.module.css'
import { typeTraining } from '../../../assets/data/infoRun'

const Terminology = () => {
  const training = [...typeTraining]
  return (
    <div className={styles.terminology}>
      {training.map((elem) => {
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

export default Terminology
