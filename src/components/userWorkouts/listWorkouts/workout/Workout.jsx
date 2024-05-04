import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteWorkout, findWorkout } from '../../../../redux/slices/workoutsSlice'

import styles from './Workout.module.css'

const Workout = ({ item, openModal }) => {
  const dispatch = useDispatch()

  // передаем ИД тренировки в стейт для дальнешего редактирования через форму и открываем модалку
  const getIdWorkout = () => {
    openModal()
    dispatch(findWorkout(item.id))
  }
  // удаляем тренировку из стейта Воркаут
  const handleDeleteWorkout = () => {
    dispatch(deleteWorkout(item.id))
  }
  return (
    <li className={styles.item}>
      <span className={styles.item__icon}>{item.icon}</span>
      <span className={styles.item__title}>{item.title}</span>
      <span className={styles.item__descr}>{item.description}</span>
      <span className={styles.item__edit} onClick={getIdWorkout}>
        {<FaEdit size={20} className={styles.item__edit_icon} />}
      </span>
      <span
        className={styles.item__delete}
        onClick={handleDeleteWorkout}
      >
        <MdDeleteForever
          size={25}
          className={styles.item__delete_icon}
        />
      </span>
    </li>
  )
}

export default Workout
