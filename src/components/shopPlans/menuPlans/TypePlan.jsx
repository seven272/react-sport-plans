import React, { useState } from 'react'

import styles from './MenuPlans.module.css'

const TypePlan = ({ arrPlans, getType }) => {
  const [typePlan, setTypePlan] = useState(null)

  const handleTypePlan = (inx) => {
    setTypePlan(arrPlans[inx])
    getType(arrPlans[inx])
  }

  // для добавления активного класса в тип спорта, иначе нужно доп проверку делать в разметке
  let isActiveType = ''
  if (typePlan) {
    isActiveType = typePlan.name
  } else {
    isActiveType = ''
  }

  return (
    <div className={styles.plans__types}>
      <span className={styles.type__subtitle}>Вид спорта: </span>
      <div className={styles.type__items}>
        {arrPlans.map((type, inx) => {
          return (
            <span
              key={type.name}
              className={
                isActiveType === type.name
                  ? `${styles.type__name_active}`
                  : `${styles.type__name}`
              }
              onClick={() => handleTypePlan(inx)}
            >
              {type.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default TypePlan
