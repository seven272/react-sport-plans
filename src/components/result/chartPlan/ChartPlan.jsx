import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

import styles from './ChartPlan.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const ChartPlan = ({ types, colors, names }) => {
  const arrLabels = Object.keys(types)
  const arrValues = Object.values(types)

  const data = {
    labels: [...names],
    datasets: [
      {
        label: ' тренировок',
        data: [...arrValues],
        backgroundColor: [...colors],
        borderColor: [...colors],
        borderWidth: 1,
      },
    ],
  }

  return <Pie data={data} className={styles.chart} />
}

export default ChartPlan
