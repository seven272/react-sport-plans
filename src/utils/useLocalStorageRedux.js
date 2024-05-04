// данные функции предназначена для работы с redux. Тупо копируем и вставляем без импорта.


const useLocalStorageRedux = (key, value) => {
    const saveToLocalStorage = (key, value) => {
        try {
          localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
          console.error(e)
        }
      }
      
      const loadFromLocalStorage = (key, defaultValue) => {
        try {
          // получаем данные из Localstorage по ключу
          // сохраняем в переменную
          const saved = localStorage.getItem(key)
          // распарсиваем так как в локалсторадж могут храниться только строки , то обьекты и массивы нужно преобразовывать
          const initial = JSON.parse(saved)
          return initial || defaultValue
        } catch (e) {
          console.error(e)
          return undefined
        }
      }
  return {
    saveToLocalStorage,
    loadFromLocalStorage
  }
}

export default useLocalStorageRedux
