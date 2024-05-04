import React, { useState } from 'react'

import styles from './Info.module.css'
import Terminology from './terminology/Terminology'
import Recommendations from './recommendations/Recommendations'
import RpeInfo from './rpeInfo/RpeInfo'
import Button from '../../UI/button/Button'

const Info = () => {
  const [isShow, setIsShow] = useState({
    termin: false,
    recommend: false,
    rpe: false
  })

  const showRpe = () => {
    setIsShow({
      ...isShow,
      rpe: !isShow.rpe,
    })
  }
  const showTerminology = () => {
    setIsShow({
      ...isShow,
      termin: !isShow.termin,
    })
  }

  const showRecommendations = () => {
    setIsShow({
      ...isShow,
      recommend: !isShow.recommend,
    })
  }
  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Тяжесть воспринимаемой нагрузки
        </h3>
        {isShow.rpe ? (
          <RpeInfo />
        ) : (
          <span className={styles.content}>
            RPE (Ratings of Perceived Exertion) - шкала, которая
            используется в спорте для определения сложности
            упражнения, по другому оценка физической нагрузки...
          </span>
        )}
        <Button classBtn="button" clickBtn={showRpe}>
          {isShow.rpe ? 'Скрыть' : 'Показать'}
        </Button>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Виды тренировок</h3>
        {isShow.termin ? (
          <Terminology />
        ) : (
          <span className={styles.content}>
            Медленный бег выполняется в спокойном режиме на пульсе
            70-80% от Вашего максимального пульса. При таком беге Вы
            можете спокойно разговаривать, и у Вас не сбивается
            дыхание. Бежать надо равномерно...
          </span>
        )}
        <Button classBtn="button" clickBtn={showTerminology}>
          {isShow.termin ? 'Скрыть' : 'Показать'}
        </Button>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Что делать до/после/во время старта?
        </h3>
        {isShow.recommend ? (
          <Recommendations />
        ) : (
          <span className={styles.content}>
            Медленный бег выполняется в спокойном режиме на пульсе
            70-80% от Вашего максимального пульса. При таком беге Вы
            можете спокойно разговаривать, и у Вас не сбивается
            дыхание. Бежать надо равномерно...
          </span>
        )}
        <Button classBtn="button" clickBtn={showRecommendations}>
          {isShow.recommend ? 'Скрыть' : 'Показать'}
        </Button>
      </div>
    </div>
  )
}

export default Info
