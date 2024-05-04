import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import styles from './EditIcon.module.css'

const EditIcon = ({ type, getIsShowForm }) => {
  const [show, setShow] = useState(false)

  const handleShowForm = () => {
    setShow((prev) => {
      return !prev
    })
    getIsShowForm(!show)
  }
  return (
    <div
      className={styles.edit_wrapper}
      onClick={() => handleShowForm()}
    >
      <AiFillEdit className={styles.edit_icon} />
      <span className={styles.edit_text}>
        {show ? 'закрыть' : 'редактировать'}
      </span>
    </div>
  )
}

export default EditIcon
