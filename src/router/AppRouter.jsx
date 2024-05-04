import React, { useEffect, useState } from 'react'
import {
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom'

import StartPage from '../pages/StartPage'
import PlanPage from '../pages/PlanPage'
import ShopPage from '../pages/ShopPage'
import InfoPage from '../pages/InfoPage'
import ProfilePage from '../pages/ProfilePage'
import AddWorkoutPage from '../pages/AddWorkoutPage'
import ResultPage from '../pages/ResultPage'
import MainLayout from '../layouts/MainLayout'
import DetailsPlan from '../components/shopPlans/menuPlans/detailsPlan/DetailsPlan'
import EmptyLayout from '../layouts/EmptyLayout'


const AppRouter = () => {
  const location = useLocation()
  const [layout, setLayout] = useState(<MainLayout />)

  useEffect(() => {
    let name = location.pathname
    if (name === '/') {
      setLayout(<MainLayout />)
    } else if (name !== '/') {
      setLayout(<EmptyLayout />)
    }
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={layout}>
        <Route index element={<StartPage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:id" element={<DetailsPlan />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="addworkout" element={<AddWorkoutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
