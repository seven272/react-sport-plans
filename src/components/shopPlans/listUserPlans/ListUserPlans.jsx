import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ListUserPlans.module.css'
import SelectPlan from './selectPlan/SelectPlan'

const ListUserPlans = () => {
  const listPlans = useSelector((state) => state.selectedPlans.selectedPlans)
  console.log(listPlans)
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Список моих планов</h2>
      <ul className={styles.items}>
        {listPlans.length > 0 ? (
          listPlans.map((elem) => {
            return (
              <li key={elem.id} className={styles.item}>
                <SelectPlan {...elem} />
              </li>
            )
          })
        ) : (
          <h3>Планов пока нет</h3>
        )}
      </ul>
    </div>
  )
}

export default ListUserPlans
