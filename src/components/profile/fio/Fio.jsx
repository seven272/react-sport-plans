import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addPersona } from '../../../redux/slices/userSlice' 
import styles from './Fio.module.css'
import EditIcon from '../editIcon/EditIcon'
import NameForm from '../forms/NameForm'

const Fio = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.persona)
  const userAvatar = useSelector((state) => state.user.avatar)
  const [showForm, setShowForm] = useState(false)

  const getIsShowForm = (payload) => {
    setShowForm(payload)
  }
  const getDataFromForm = (payload) => {
    console.log('fio полученные из формы: ' + payload)
    dispatch(addPersona(payload))
  }
  return (
    <div className={styles.fio}>
      {showForm ? (
        <NameForm getDataFromForm={getDataFromForm} />
      ) : (
        <>
          <img
            className={styles.avatar}
            src={userAvatar}
            alt={userAvatar}
          />
          <h3 className={styles.title}>{userData.name}</h3>
          <ul className={styles.items}>
            <li className={styles.item}>
              <span className={styles.item__title}>Возраст</span>
              <span className={styles.item__data}>
                {userData.age} лет
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.item__title}>Рост</span>
              <span className={styles.item__data}>
                {userData.height} см
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.item__title}>Вес</span>
              <span className={styles.item__data}>
                {userData.weight} кг
              </span>
            </li>
          </ul>
        </>
      )}

      <EditIcon type="fio" getIsShowForm={getIsShowForm} />
    </div>
  )
}

export default Fio
