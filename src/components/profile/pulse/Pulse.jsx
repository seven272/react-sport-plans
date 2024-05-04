import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addPulses } from '../../../redux/slices/userSlice'
import styles from './Pulse.module.css'
import EditIcon from '../editIcon/EditIcon'
import PulseForm from '../forms/PulseForm'

const Pulse = () => {
  const dispatch = useDispatch()
  const pulses = useSelector(state => state.user.pulses)
  const [showForm, setShowForm] = useState(false)

 
  const getIsShowForm = (payload) => {
    setShowForm(payload)
  }

  const getDataFromForm = (payload) => {

    dispatch(addPulses(payload))
  }
  return (
    <div className={styles.pulse}>
      {showForm ? (
        <PulseForm getData={getDataFromForm} />
      ) : (
        <>
          <h3 className={styles.title}>Пульсовые зоны</h3>
          <ul className={styles.items}>
            <li className={styles.item}>
              <span
                className={`${styles.item__title} ${styles.item__header}`}
              >
                Зона
              </span>
              <span className={`${styles.item__title} ${styles.item__header}`}>
                Пульс,
                <span style={{ fontSize: '10px' }}>уд в мин</span>
              </span>
              <span className={`${styles.item__title} ${styles.item__header}`}>
                % от максимума
              </span>
            </li>
            <li
              className={styles.item}
              style={{ backgroundColor: '#c4c0c0' }}
            >
              <span className={styles.item__title}>Очень легко</span>
              <span className={styles.item__pulse}>{pulses.zone1}</span>
              <span className={styles.item__percent}>50-59</span>
            </li>
            <li
              className={styles.item}
              style={{ backgroundColor: '#4794ff' }}
            >
              <span className={styles.item__title}>Легко</span>
              <span className={styles.item__pulse}>{pulses.zone2}</span>
              <span className={styles.item__percent}>60-69</span>
            </li>
            <li
              className={styles.item}
              style={{ backgroundColor: '#4cbb17' }}
            >
              <span className={styles.item__title}>
                Средние усилия
              </span>
              <span className={styles.item__pulse}>{pulses.zone3}</span>
              <span className={styles.item__percent}>70-79</span>
            </li>
            <li
              className={styles.item}
              style={{ backgroundColor: '#fff44f' }}
            >
              <span className={styles.item__title}>Интенсивно</span>
              <span className={styles.item__pulse}>{pulses.zone4}</span>
              <span className={styles.item__percent}>80-89</span>
            </li>
            <li
              className={styles.item}
              style={{ backgroundColor: '#ff2b2b' }}
            >
              <span className={styles.item__title}>Максимум</span>
              <span className={styles.item__pulse}>{pulses.zone5}</span>
              <span className={styles.item__percent}>90-100</span>
            </li>
          </ul>
        </>
      )}

      <EditIcon type="pulse" getIsShowForm={getIsShowForm}/>
    </div>
  )
}

export default Pulse
