import React from 'react'
import { Progress } from 'antd'
import styles from '../Result.module.css'

const ProgressChart = ({result, title}) => {
  return (
    <>
    <span className={styles.result__subtitle}>
      {title}
    </span>
    <Progress
      type="dashboard"
      size={300}
      steps={4}
      percent={result}
      strokeColor="#1cac78"
      success={{ percent: result, strokeColor: '#1cac78' }}
      trailColor="rgba(179, 179, 179, 0.6)"
      strokeWidth={15}
    />
  </>
  )
}

export default ProgressChart