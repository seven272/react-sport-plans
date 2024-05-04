import React, { useEffect, useState } from 'react'

import styles from './MenuPlans.module.css'
import TypePlan from './TypePlan'
import DistancesPlan from './DistancesPlan'
import ListPlans from './ListPlans'

const MenuPlans = ({ arrPlans }) => {
  // вид спорта
  const [type, setType] = useState(null)
  // индекс дистанции для получения соответсвующих планов
  const [inxDistance, setInxDistance] = useState(null)

  const setTypePlans = (payload) => {
    setType(payload)
  }
  const setIndexDistancePlan = (inx) => {
    setInxDistance(inx)
  }

  // тут формируем массив с планами, после выбора вида спорта и нужной дистанции.
  let arraySortedPlans = null
  if (type) {
    arraySortedPlans = type.distances[inxDistance]
  }

  return (
    <div className={styles.plans__menu}>
      <h2 className={styles.plans__title}>
        Выберите вид спорта и дистанцию
      </h2>
      <div className={styles.plans__wrapper}>
        <TypePlan arrPlans={arrPlans} getType={setTypePlans} />
        {type && (
          <DistancesPlan
            type={type}
            getIndex={setIndexDistancePlan}
          />
        )}
        <ListPlans listPlans={arraySortedPlans} />
      </div>
    </div>
  )
}

export default MenuPlans
