import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Forms.module.css'
import Input from '../../../UI/input/Input'
import Button from '../../../UI/button/Button'

const NameForm = ({ getDataFromForm, closeForm }) => {
  const userData = useSelector((state) => state.user.persona)
  const [person, setPerson] = useState({
    name: '',
    age: null,
    weight: null, 
    height: null,
  })
  const getData = (payload) => {
    switch (payload.name) {
      case 'fio':
        setPerson({ ...person, name: payload.value })
        break
      case 'age':
        setPerson({ ...person, age: payload.value })
        break
      case 'weight':
        setPerson({ ...person, weight: payload.value })
        break
      case 'height':
        setPerson({ ...person, height: payload.value })
        break

      default:
        setPerson(person)
        break
    }
  }
  const handleSavePerson = () => {
    setPerson(person)
    getDataFromForm(person)
    closeForm(false)
  }
  return (
    <div className={styles.form}>
      <Input
        myId={'fio'}
        myClass="text"
        myType="text"
        myLabel="Имя и Фамилия"
        plchl="введите имя..."
        myValue={userData.name}
        getData={getData}
      />
      <Input
        myId={'age'}
        myClass="text"
        myType="number"
        myLabel="Возраст"
        plchl="ваш возраст..." 
        myValue={userData.age}
        getData={getData}
      />
      <Input
        myId={'weight'}
        myClass="text"
        myType="number"
        myLabel="Вес"
        plchl="ваш вес в кг..."
        myValue={userData.weight}
        getData={getData}
      />
      <Input
        myId={'height'}
        myClass="text"
        myType="number"
        myLabel="Рост"
        plchl="ваш рост в см..."
        myValue={userData.height}
        getData={getData}
      />
      <Button classBtn="button" clickBtn={handleSavePerson}>
        Сохранить
      </Button>
    </div>
  )
}

export default NameForm
