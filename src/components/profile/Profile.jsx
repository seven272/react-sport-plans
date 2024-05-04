import React from 'react'

import styles from './Profile.module.css'
import Fio from './fio/Fio'
import Records from './records/Records'
import Pulse from './pulse/Pulse'
import Rpe from './rpe/Rpe'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Fio />

      <Records />

      <Pulse />

      <Rpe />
    </div>
  )
}

export default Profile
