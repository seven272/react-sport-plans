import { useEffect, useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  // определяем было ли действие в инпуте, то есть кликали на него
  const [isDirty, setDirty] = useState(false)
  // для определения типа инпута для последующей валидации(только цифры или текст и цифры, к примеру)
  const [type, setType] = useState('text')
  const [textError, setTextError] = useState('')
  const [isValid, setValid] = useState(false)
  //регулярка только цифры
  const regNumber = /^\d+$/
  //регулярка только буквы и пробелы
  // const reg1 = /^[A-Za-z\s]+$/g
 //регулярка цифры, знаки, буквы и пробелы
  const reg = /^[-/'"№., 0-9a-zA-Zа-яёА-ЯЁ\s]+$/g

  const onChange = (val) => {
    setValue(val)
  }

  const onBlur = (val) => {
    setDirty(true)
    if (val.length === 0 && type !== 'time') {
      setTextError('Поле не может быть пустым')
    }
  }

  const onFocus = (val) => {
    setType(val)
  }

  useEffect(() => {
    if (value.length > 100) {
      setTextError('Максимальная длина 3 символа')
    } else if (
      !regNumber.test(String(value).toLocaleLowerCase()) &&
      value.length !== 0 &&
      type === 'number'
    ) {
      setTextError('Вводите только цифры')
    } else if (
      !reg.test(String(value).toLocaleLowerCase()) &&
      value.length !== 0 &&
      type === 'text'
    ) {
      setTextError('Вводите корректные данные')
    } else {
      setTextError('')
    }
  }, [value])

  useEffect(() => {
    if (textError === '') {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [textError])

  return {
    onChange,
    onBlur,
    onFocus,
    isDirty,
    textError,
    isValid,
  }
}

const useTextField = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  // определяем было ли действие в инпуте, то есть кликали ли на него
  const [isDirty, setDirty] = useState(false)
  // для определения типа инпута для последующей валидации(только цифры или текст и цифры, к примеру)
  const [type, setType] = useState('text')
  // сюда записываем тект при ошибке
  const [textError, setTextError] = useState('')
  //регулярка только цифры, латинские и кирилические буквы
    const reg = /^(?!\s*$)[-/'"№., 0-9a-zA-Zа-яёА-ЯЁ]+$/
  // на всякий случай, в данной функции вся проверка в онБлур происходи
  const onChange = (val) => {
    setValue(val)
  }

  const onBlur = (val) => {
    setDirty(true)
    if (val.length === 0) {
      setTextError('Поле не может быть пустым')
    } else if (val.length > 30) {
      setTextError('Максимальная длина 30 символов')
    } else if (val.length < 3) {
      setTextError('Минимальная длина 3 символа')
    } else if (
      !reg.test(String(val).toLocaleLowerCase()) &&
      val.length !== 0 
    ) {
      setTextError('Вводите корректные данные')
    } else {
      setTextError('')
    }
  }
  
  return {
    onChange,
    onBlur,
    isDirty,
    textError,
  }
}

const useTextArea = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  // определяем было ли действие в инпуте, то есть кликали ли на него
  const [isDirty, setDirty] = useState(false)
  // для определения типа инпута для последующей валидации(только цифры или текст и цифры, к примеру)
  const [type, setType] = useState('text')
  // сюда записываем тект при ошибке
  const [textError, setTextError] = useState('')
  //регулярка только цифры, латинские и кирилические буквы
    const reg = /^(?!\s*$)[-/'"№., 0-9a-zA-Zа-яёА-ЯЁ]+$/
  // на всякий случай, в данной функции вся проверка в онБлур происходи
  const onChange = (val) => {
    setValue(val)
  }

  const onBlur = (val) => {
    setDirty(true)
    if (val.length === 0) {
      setTextError('Поле не может быть пустым')
    } else if (val.length > 30) {
      setTextError('Максимальная длина 30 символов')
    } else if (val.length < 3) {
      setTextError('Минимальная длина 3 символа')
    } else if (
      !reg.test(String(val).toLocaleLowerCase()) &&
      val.length !== 0 
    ) {
      setTextError('Вводите корректные данные')
    } else {
      setTextError('')
    }
  }
  
  return {
    onChange,
    onBlur,
    isDirty,
    textError,
  }
}


export { useInput, useTextField, useTextArea }
