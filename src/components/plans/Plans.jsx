import React, { useState } from 'react'

import Plan from './plan/Plan'
import styles from './Plans.module.css'

const Plans = () => {
  return (
    <div className={styles.plans}>
      <Plan />
    </div>
  )
}

export default Plans
