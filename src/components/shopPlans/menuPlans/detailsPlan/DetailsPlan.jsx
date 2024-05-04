import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { BsBoxArrowInLeft } from 'react-icons/bs'

import { typePlans } from '../../../../assets/data/typePlans'
import styles from './DetailsPlan.module.css'

const DetailsPlan = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [plan, setPlan] = useState({})

  const findPlan = () => {
    // все планы которые изначально хранятся в данных в иде массива обьектов добавляем в один общий массив
    let newArrPlans = []
    typePlans.forEach((type) => {
      return type.distances.forEach((distance) => {
        return distance.plans.map((elem) => {
          return newArrPlans.push(elem)
        })
      })
    })
    // находим нужный план сравнивая ид элемента и данные их хука useParams
    const currentPlan = newArrPlans.find((elem) => {
      return elem.id === id
    })
    setPlan(currentPlan)
  }

  useEffect(() => {
    findPlan()
  }, [])

  return (
    <div className={styles.details}>
      <div className={styles.back} onClick={() => navigate(-1)}>
        <BsBoxArrowInLeft size={20} className={styles.back__icon} />
        <span className={styles.back__text}>к списку планов</span>
      </div>

      <h2 className={styles.details__title}>{plan.title}</h2>
      <span className={styles.details__period}>
        Срок подготовки: {plan.period}
      </span>
      <span className={styles.details__description}>
        {plan.description}
      </span>
      <h3 className={styles.details__subtitle}>
        Пример первой тренировочной недели
      </h3>
      <div className={styles.details__help}>
        <p>
          НЕ ЗАБЫВАЙТЕ: RPE это тяжесть воспринимаемых усилий,{' '}
          <Link className={styles.details__link} to="/info">
            подробнее про RPE
          </Link>{' '}
          || Узнать и настроить свои пульсовые зоны можно{' '}
          <Link className={styles.details__link} to="/profile">
            тут
          </Link>
        </p>
      </div>
      <div className={styles.plan__header}>
        <span className={styles.plan__header_number}>№</span>
        <span className={styles.plan__header_day}>День</span>
        <span className={styles.plan__header_title}>Тренировка</span>
        <span className={styles.plan__header_descr}>Описание</span>
      </div>

      <ul className={styles.plan__days}>
        {plan.plan &&
          plan.plan[0].map((elem) => {
            return (
              <li key={elem.id} className={styles.plan__day}>
                <span className={styles.plan__day_number}>
                  {elem.id}
                </span>
                <span className={styles.plan__day_day}>
                  {elem.day}
                </span>
                <span className={styles.plan__day_title}>
                  {elem.title}
                </span>
                <span className={styles.plan__day_descr}>
                  {elem.description}
                </span>
              </li>
            )
          })}
        <li></li>
      </ul>

      <button onClick={findPlan} className={styles.details__btn}>
        Выбрать этот план
      </button>
    </div>
  )
}

export default DetailsPlan
