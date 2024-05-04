import React from 'react'
import { AiFillPicture } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedPlan } from '../../../../redux/slices/selectedPlansSlice'

import styles from './PreviewPlan.module.css'

const PreviewPlan = ({ objPlan }) => {
  const { title, tags, picture, id } = objPlan
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const transformTags = tags
    .map((tag) => {
      return `#${tag}`
    })
    .join('')

  const buyPlan = () => {
    console.log(objPlan)
    dispatch(setSelectedPlan(objPlan))
  }

  const openDetailsPlan = () => {
    console.log(objPlan)
    navigate(`/shop/${id}`)
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

        <button className={styles.card__btn} onClick={buyPlan}>
          купить
        </button>
      </div>
    </div>
  )
}

export default PreviewPlan
