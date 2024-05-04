import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './router/AppRouter'
import useTheme from './utils/useTheme'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
