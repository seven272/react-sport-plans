import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/slices/themeSlice'

const useTheme = () => {
  const dispatch = useDispatch()
  // const themeFromRedux = useSelector((state) => state.theme)
  const theme = useSelector((state) => state.theme)
  //  получаем данные из локалСторадж, если нет из редьюсера, в котором по умолчанию тема light
  // const theme =
  //   localStorage.getItem('theme-app-run') || themeFromRedux


  const handleToggleTheme = (nameTheme) => {
    //  отправляем после обработки аргумента данные редьюсера, тамже заносим данные в локалСторадж
    const newTheme = nameTheme === 'dark' ? 'dark' : 'light'
  
    dispatch(toggleTheme(newTheme))
  }

  return {
    theme,
    handleToggleTheme,
  }
}

export default useTheme
