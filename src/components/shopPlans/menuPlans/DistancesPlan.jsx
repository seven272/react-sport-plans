import React, { useState } from 'react'

import styles from './MenuPlans.module.css'

const DistancesPlan = ({ type, getIndex }) => {
  const [distance, setDistance] = useState({})

  const handleDistance = (elem, inx) => {
    setDistance(elem)
    getIndex(inx)
  }
  return (
    <div className={styles.plans__distances}>
      <span className={styles.distance__subtitle}>Дистанции:</span>
      <div className={styles.distance__items}>
        {type &&
          type.distances.map((elem, inx) => {
            return (
              <span
                key={elem.title}
                className={
                  distance.title === elem.title
                    ? `${styles.distance__name_active}`
                    : `${styles.distance__name}`
                }
                onClick={() => handleDistance(elem, inx)}
              >
                {elem.title}
              </span>
            )
          })}
      </div>
    </div>
  )
}

export default DistancesPlan
