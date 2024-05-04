import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import WeekPlan from './weekPlan/WeekPlan.jsx'
import styles from './Plan.module.css'
import Pagination from '../../pagination/Pagination.jsx'
import Progressbar from '../../../UI/progressbar/Progressbar.jsx'
import Modal from '../../modal/Modal.jsx'
import CreatedWorkouts from '../../createdWorkouts/CreatedWorkouts.jsx'
import { findWorkoutPlan } from '../../../redux/slices/planSlice.js'

const Plan = () => {
  const dispatch = useDispatch()
  const plan = useSelector((state) => state.plan.plan)
  const title = useSelector((state) => state.plan.namePlan)
  const currentWeek = useSelector((state) => state.plan.currentWeek)
  const numberProgress = useSelector((state) => state.plan.progress)
  const description = useSelector((state) => state.plan.descrPlan)

  const [activeModal, setActiveModal] = useState(false)

  const [page, setPage] = useState(currentWeek)

  const paginate = (pageNumber) => {
    setTimeout(() => {
      setPage(pageNumber - 1)
    }, 200)
  }
  const addWorkoutInPlan = (workoutId) => {
    dispatch(findWorkoutPlan(workoutId))
    setActiveModal((prev) => !prev)
  }

  return (
    <div className={styles.plan}>
      <h1 className={styles.plan__title}>{title}</h1>
      <span className={styles.plan__descr}>{description}</span>
      {plan.map((week, inx) => {
        return (
          <WeekPlan
            key={inx}
            week={week}
            numberWeek={inx}
            paginatePage={page}
            addWorkout={addWorkoutInPlan}
          />
        )
      })}
      <Progressbar completed={numberProgress} />
      <Pagination
        paginate={paginate}
        elementsPerPage={1}
        totalElements={plan.length}
        activePage={page}
      />
      <Modal active={activeModal} setActive={() => setActiveModal()}>
        <CreatedWorkouts closeModal={setActiveModal}/>
      </Modal>
    </div>
  )
}

export default Plan
