import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GiStrongMan } from 'react-icons/gi' 
import { GiWalk } from 'react-icons/gi'
import { FaPersonRunning } from 'react-icons/fa6'
import { GrSwim } from 'react-icons/gr'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import { TbStretching2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'

import { addWorkout } from '../../../redux/slices/workoutsSlice'
import styles from './FormWorkout.module.css'
import Button from '../../../UI/button/Button'
import {
  useTextField,
  useTextArea,
} from '../../../utils/useValidation'

const FormWorkout = () => {
  const dispatch = useDispatch()
  const validInput = useTextField('')
  const validTextArea = useTextArea('')
  const [showForm, setShowForm] = useState(false)
  const [isDisabledBtn, setIsDisabledBtn] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('choose')
  const [icon, setIcon] = useState(<FaPersonRunning size={20} />)

  const toggleShowForm = () => {
    setShowForm((prev) => !prev)
  }

  const handleTitle = (evt) => {
    validInput.onChange(evt.target.value)
    setTitle(evt.target.value)
  }

  const handleDescription = (evt) => {
    validTextArea.onChange(evt.target.value)
    setDescription(evt.target.value)
  }

  const handleSelect = (evt) => {
    setType(evt.target.value)
    switch (evt.target.value) {
      case 'run':
        setIcon(<FaPersonRunning size={20} />)
        break
      case 'bike':
        setIcon(<MdOutlineDirectionsBike size={20} />)
        break
      case 'swim':
        setIcon(<GrSwim size={20} />)
        break
      case 'stretch':
        setIcon(<TbStretching2 size={20} />)
        break
      case 'strength':
        setIcon(<GiStrongMan size={20} />)
        break
      case 'other':
        setIcon(<GiWalk size={20} />)
        break
      default:
        break
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const newWorkout = {
      id: uuidv4(),
      icon: icon,
      title,
      type,
      subtype: '',
      description,
      note: '',
      isCompleted: false,
      optional: []
    }
    dispatch(addWorkout(newWorkout))
    setTitle('')
    setDescription('')
    setType('choose')
  }

  useEffect(() => {
    if (title !== '' && description !== '' && type !== 'choose') {
      setIsDisabledBtn(false)
    } else {
      setIsDisabledBtn(true)
    }
  }, [type, description, title])

  return (
    <div className={styles.section}>
      <Button classBtn="button" clickBtn={toggleShowForm}>
        {showForm ? 'Закрыть форму' : 'Создать cвою тренировку'}
      </Button>
      {showForm && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span className={styles.subtitle}>
              Название тренировки:
            </span>
            <input
              className={styles.field}
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
              placeholder="введите название..."
              max="30"
              min="1"
              onBlur={(evt) => validInput.onBlur(evt.target.value)}
            />
          </label>
          <span className={styles.field__error}>
            {validInput.textError}
          </span>

          <label className={styles.label}>
            <span className={styles.subtitle}>Тип тренировки:</span>
            <select
              name="selectedType"
              value={type}
              onChange={handleSelect}
              className={styles.select}
            >
              <option disabled value="choose">
                Выбрать
              </option>
              <option value="run">Бег</option>
              <option value="swim">Плавание</option>
              <option value="bike">Велосипед</option>
              <option value="stretch">Растяжка</option>
              <option value="strength">Силовая</option>
              <option value="other">Другая</option>
            </select>
          </label>
          <label className={styles.label__textarea}>
            <span className={styles.subtitle}>Описание:</span>

            <textarea
              name="descr"
              rows={4}
              cols={40}
              value={description}
              onChange={handleDescription}
              placeholder="описание тренировки..."
              className={styles.field__textarea}
              onBlur={(evt) => validTextArea.onBlur(evt.target.value)}
            />
          </label>
          <span className={styles.field__error}>
            {validTextArea.textError}
          </span>
          <Button
            type="submit"
            classBtn="button"
            disabledBtn={isDisabledBtn}
          >
            Создать
          </Button>
        </form>
      )}
    </div>
  )
}

export default FormWorkout
