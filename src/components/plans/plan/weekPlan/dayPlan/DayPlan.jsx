import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import styles from './DayPlan.module.css'
import Checkbox from '../../../../../UI/checkbox/Checkbox'
import {
  completedWorkoutPlan, 
  countingProgressPlan,
  findWorkoutPlan
} from '../../../../../redux/slices/planSlice'

const DayPlan = ({
  id,
  day,
  title,
  description,
  note,
  isCompleted,
  optional,
  numberForParity,
  addWorkout,
}) => {
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkParity = () => {
      if (numberForParity % 2 === 0) {
        setIsDarkBackground(false)
      } else {
        setIsDarkBackground(true)
      }
    }
    checkParity()
  }, [])

  const handleAddWorkout = (idWorkout) => {
    addWorkout(idWorkout)
  }

  const handleChangeType = () => {
    dispatch(completedWorkoutPlan(id))
    dispatch(countingProgressPlan(id))
  }

   
  return (
    <div
      className={`${styles.day} ${
        isDarkBackground
          ? styles.background__dark
          : styles.background__light
      }`}
    >
      <div className={styles.day__wrapper}>
        <span className={styles.day__number}>{id}</span>
        <span className={styles.day__name}>{day}</span>
        <span className={styles.day__title}>{title}</span>
        <span className={styles.day__descr}>{description}</span>
        <span className={styles.day__completed}>
          <Checkbox
            label=""
            value={isCompleted}
            isDisabled={false}
            id={id}
            changeCheckbox={handleChangeType}
          />
        </span>
        <span
          className={styles.day__add}
          onClick={() => handleAddWorkout(id)}
        >
          <IoMdAddCircle size={25} style={{ color: '#424242' }} />
        </span>
      </div>
      {/* тут проходимся по массиву с доптренировками, если таковые есть отрисовываем их в этот же днь*/}
      {optional.length > 0 &&
        optional.map((elem, inx) => {
          return (
            <div key={inx} className={styles.day__wrapper}>
              <span className={styles.day__number}>{}</span> 
              <span className={styles.day__name}>{}</span>
              <span className={styles.day__title}>{elem.title}</span>
              <span className={styles.day__descr}>
                {elem.description}
              </span>
              <span className={styles.day__completed}>

              </span>
            </div>
          )
        })}
    </div>
  )
}

export default DayPlan
