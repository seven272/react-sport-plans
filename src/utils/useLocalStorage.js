// данная логика предназначена для компонентов и их состояния useState

import { useState, useEffect } from 'react'

const getStorageValue = (key, defaultValue) => {
  // получаем данные из Localstorage по ключу
  // сохраняем в переменную
  const saved = localStorage.getItem(key)
  // распарсиваем так как в локалсторадж могут храниться только строки , то обьекты и массивы нужно преобразовывать
  const initial = JSON.parse(saved)
  return initial || defaultValue
}

const useLocalStorage = (key, defaultValue) => {
    // тут в стейт сохраняем те данные что возвращает функция выше. 
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
