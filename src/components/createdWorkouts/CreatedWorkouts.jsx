import React, { useState } from 'react'
import { MdNoteAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import styles from './CreatedWorkouts.module.css'
import Radio from '../../UI/radio/Radio'
import { addWorkoutPlan, findWorkoutPlan } from '../../redux/slices/planSlice'

const CreatedWorkouts = ({closeModal}) => {
  const dispatch = useDispatch()
  const workouts = useSelector(state => state.workouts.listWorkouts)
  const [workout, setWorkout] = useState({})

  const handleChange = (element) => { 
    setWorkout(element)
  }

  const handleAddWorkout = () => {
    dispatch(addWorkoutPlan(workout))
    setWorkout({})
    closeModal(false)
  }
  return (
    <div className={styles.section}>
      <ul className={styles.items}>
        {workouts.map((elem) => {
          return (
            <li className={styles.item} key={elem.id}>
              <Radio
                changed={() => handleChange(elem)}
                checked={elem.id === workout.id ? true : false}
                id={elem.id}
                val={elem.id}
                classRadio="radio__wrapper"
              />
              <div
                className={
                  elem.id === workout.id
                    ? `${styles.active} ${styles.content}`
                    : styles.content
                }
              >
                <div className={styles.header}>
                  <span className={styles.icon}>{elem.icon}</span>
                  <span className={styles.title}>{elem.title}</span>
                </div>
                <span className={styles.description}>
                  {elem.description}
                </span>
              </div>
              {elem.id === workout.id && ( 
                <button
                  className={styles.btn}
                  onClick={handleAddWorkout}
                >
                  <MdNoteAdd
                    size={30}
                    style={{ marginRight: '5px' }}
                  />
                  добавить
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CreatedWorkouts
