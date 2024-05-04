import React from 'react'

import PreviewPlan from './previewPlan/PreviewPlan'
import styles from './MenuPlans.module.css'

const ListPlans = ({listPlans}) => {
  return (
    <div className={styles.list__plans}>
        {listPlans && listPlans.plans.map((elem, inx) => {
            return <PreviewPlan key={inx} objPlan = {elem}/>
        })} 
    </div>
  )
}

export default ListPlans