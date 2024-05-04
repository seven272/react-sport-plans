import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Result.module.css'
import ChartPlan from './chartPlan/ChartPlan'
import ProgressChart from './progressChart/ProgressChart'
const Result = () => {
  const progressDate = useSelector((state) => state.plan.progress)
  const typeDate = useSelector((state) => state.plan.statisticsTypes)
  const subtypeDate = useSelector(
    (state) => state.plan.statisticsSubtypes
  )
  const namesForTypes = [
    'бег',
    'вело',
    'плавание',
    'растяжка',
    'силовая',
    'отдых',
    'другое',
  ]

  const namesForSubtypes = [
    'восстановительная',
    'длительная',
    'интервалы',
    'темповая',
    'прогрессивная',
    'фартлек',
    'бег в гору',
    'СБУ',
    'другое',
  ]

  const colorsType = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 20, 147, 1)',
  ]
  const colorsSubtype = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 20, 147, 1)',
    'rgba(32, 178, 170, 1)',
    'rgba(218, 165, 32, 1)',
  ]
  return (
    <div className={styles.result}>
      <div
        className={`${styles.result__wrap_block} ${styles.chart1}`}
      >
        <ProgressChart
          title="На сколько выполнен план"
          result={progressDate}
        />
      </div>
      <div
        className={`${styles.result__wrap_block} ${styles.chart2}`}
      >
        <ProgressChart
          title="Сколько дней вы занимаетесь по плану"
          result={progressDate}
        />
      </div>
      <div
        className={`${styles.result__wrap_block} ${styles.chart3}`}
      >
        <span className={styles.result__subtitle}>
          Данные по видам тренировок
        </span>
        <ChartPlan
          types={typeDate}
          colors={colorsType}
          names={namesForTypes}
        />
      </div>
      <div
        className={`${styles.result__wrap_block} ${styles.chart4}`}
      >
        <span className={styles.result__subtitle}>
          Данные по типам тренировок
        </span>
        <ChartPlan
          types={subtypeDate}
          colors={colorsSubtype}
          names={namesForSubtypes}
        />
      </div>
    </div>
  )
}

export default Result
