import React from 'react'
import { AiFillPicture } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import { changeActivePlan } from '../../../../redux/slices/planSlice'
import styles from './SelectPlan.module.css'

const SelectPlan = ({ title, tags, picture, plan }) => {
  const listPlans = useSelector((state) => state.selectedPlans.selectedPlans)
  const dispatch = useDispatch()

  const transformTags = tags
    .map((tag) => {
      return `#${tag}`
    })
    .join('')

    const selectPlan = () => {
      dispatch(changeActivePlan(plan)) 
    }

    const openDetailsPlan = () => {
      console.log('show plan')
    }
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      {picture !== '' ? (
        <img className={styles.picture} src={picture} alt={title} />
      ) : (
        <AiFillPicture size={150} color={'#a59d9d'} />
      )}
      <span className={styles.tags}>{transformTags}</span>
      <div className={styles.card__btn_wrap}>
        <button
          className={styles.card__btn}
          onClick={openDetailsPlan}
        >
          детали
        </button>

        <button className={styles.card__btn} onClick={selectPlan}>
          актив
        </button>
      </div>
    </div>
  )
}

export default SelectPlan
