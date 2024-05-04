import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setNumberCurrentWeek } from '../../../../redux/slices/planSlice' 
import DayPlan from './dayPlan/DayPlan'
import styles from './WeekPlan.module.css' 

const WeekPlan = ({
  week,
  numberWeek,
  paginatePage = 0,
  addWorkout,
}) => {
  const indexCurrentWeek = useSelector(
    (state) => state.plan.currentWeek
  )
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(
    indexCurrentWeek === numberWeek ? true : false
  )

  const checkCurrentWeek = () => {
    console.log(numberWeek)
    setIsChecked(!isChecked)
    dispatch(setNumberCurrentWeek(numberWeek))
  }

  useEffect(() => {
    if (indexCurrentWeek === numberWeek) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [indexCurrentWeek, numberWeek])

  return (
    <>
      {numberWeek === paginatePage && (
        <div className={styles.week}>
          <span className={styles.week__title}>
            Неделя {numberWeek + 1}
          </span>

          <div className={styles.checkbox_wrapper}>
            <input
              type="checkbox"
              id={`week-checkbox-${numberWeek}`}
              className={
                isChecked
                  ? `${styles.checkbox_checked} ${styles.checkbox_input}`
                  : styles.checkbox_input
              }
              checked={isChecked}
              onChange={checkCurrentWeek}
            />
            <label
              htmlFor={`week-checkbox-${numberWeek}`}
              className={styles.checkbox_label}
            >
              Текущая тренировачная неделя
            </label>
          </div>
          <div className={styles.week__help}>
            <p>
              НЕ ЗАБЫВАЙТЕ: RPE это тяжесть воспринимаемых усилий,{' '}
              <Link className={styles.week__link} to="/info">
                подробнее про RPE
              </Link>
              || Узнать и настроить свои пульсовые зоны можно{' '}
              <Link className={styles.week__link} to="/profile">
                тут
              </Link>
            </p>
          </div>
          <div className={styles.week__header}>
            <span className={styles.week__header_number}>№</span>
            <span className={styles.week__header_name}>День</span>
            <span className={styles.week__header_title}>
              Тренировка
            </span>
            <span className={styles.week__header_descr}>
              Примечание
            </span>
            <span className={styles.week__header_completed}>
              &#10004;
            </span>
            <span className={styles.week__header_add}>Еще</span>
          </div>
          {week.map((day, inx) => {
            return (
              <div key={inx} className={styles.week}>
                <DayPlan
                  {...day}
                  numberForParity={inx + 1}
                  addWorkout={addWorkout}
                />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default WeekPlan
