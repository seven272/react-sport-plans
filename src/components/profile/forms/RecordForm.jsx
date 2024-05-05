import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Forms.module.css'
import Input from '../../../UI/input/Input'
import Button from '../../../UI/button/Button'
import InputTime from '../../../UI/inputTime/InputTime'


const RecordForm = ({ getDataFromForm, closeForm}) => {
  const userRecords = useSelector((state) => state.user.records)
  const [record, setRecord] = useState({
    ...userRecords,
  })

  const updateEnteredData = (value) => {
    const arr = value.split(':')
    arr.splice(1, 0, 'ч. ')
    arr.splice(3, 0, 'мин. ')
    arr.splice(5, 0, 'сек. ')
    const str = arr.join('')
    return str
  }

  const getData = (payload) => {
    switch (payload.name) {
      case 'five':
        setRecord({
          ...record,
          five: updateEnteredData(payload.value),
        })
        break
      case 'ten':
        setRecord({
          ...record,
          ten: updateEnteredData(payload.value),
        })
        break
      case 'halfmarathon':
        setRecord({
          ...record,
          halfmarathon: updateEnteredData(payload.value),
        })
        break
      case 'marathon':
        setRecord({
          ...record,
          marathon: updateEnteredData(payload.value),
        })
        break

      default:
        setRecord(record)
        break
    }
  }
  const handleSaveRecord = () => {
    setRecord(record)
    getDataFromForm(record)
    closeForm(false)
  }
  return (
    <div className={styles.form}>
      <InputTime title="5км" name="five" getTime={getData}/>
      <InputTime title="10км" name="ten" getTime={getData}/>
      <InputTime title="21км" name="halfmarathon" getTime={getData}/>
      <InputTime title="42км" name="marathon" getTime={getData}/>

      <Button classBtn="button" clickBtn={handleSaveRecord}>
        Сохранить
      </Button>
    </div>
  )
}

export default RecordForm
