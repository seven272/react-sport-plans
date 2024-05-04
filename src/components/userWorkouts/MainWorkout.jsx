import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ListWorkouts from './listWorkouts/ListWorkouts'
import FormWorkout from './formWorkout/FormWorkout'

import Modal from '../modal/Modal.jsx'
import EditWorkout from '../editWorkout/EditWorkout.jsx'

const MainWorkout = () => {
  const addedWorkouts = useSelector(
    (state) => state.workouts.listWorkouts
  )
  const [activeModal, setActiveModal] = useState(false)

  const openModal = () => {
    setActiveModal((prev) => !prev)
  }

  return (
    <>
      <ListWorkouts list={addedWorkouts} openModal={openModal} />
      <FormWorkout />
      <Modal active={activeModal} setActive={setActiveModal}>
        {activeModal && <EditWorkout />}
      </Modal>
    </>
  )
}

export default MainWorkout
