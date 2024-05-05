import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addRecords } from '../../../redux/slices/userSlice'
import styles from './Records.module.css'
import EditIcon from '../editIcon/EditIcon'
import RecordForm from '../forms/RecordForm'

const Records = () => {
  const dispatch = useDispatch()
  const userRecords = useSelector((state) => state.user.records)

  const [showForm, setShowForm] = useState(false)

  const getIsShowForm = (payload) => {
    setShowForm(payload)
  }

  const getDataFromForm = (payload) => {
    dispatch(addRecords(payload))
  }

  return (
    <div className={styles.records}>
      {showForm ? (
        <RecordForm getDataFromForm={getDataFromForm} closeForm={setShowForm}/>
      ) : (
        <>
          <h3 className={styles.title}>
            Лучшее время на дистнанции:
          </h3>
          <ul className={styles.items}>
            <li className={styles.item}>
              <span className={styles.item__title}>5 км</span>
              <span className={styles.item__data}>
                {userRecords.five}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.item__title}>10 км</span>
              <span className={styles.item__data}>
                {userRecords.ten}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.item__title}>21 км</span>
              <span className={styles.item__data}>
                {userRecords.halfmarathon}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.item__title}>42 км</span>
              <span className={styles.item__data}>
                {userRecords.marathon}
              </span>
            </li>
          </ul>
        </>
      )}

      <EditIcon type="fio" getIsShowForm={getIsShowForm} />
    </div>
  )
}

export default Records
