import React from 'react'

import Workout from './workout/Workout'
import styles from './ListWorkouts.module.css'

const ListWorkouts = ({ list, openModal }) => {
 
  return (
    <div className={styles.workouts}>
      <h2 className={styles.title}>Список пользовательских тренировок</h2>
      <ul className={styles.items}>
        {list.map((item) => {
          return (
            <Workout
              key={item.id}
              item={item}
              openModal={openModal}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ListWorkouts
