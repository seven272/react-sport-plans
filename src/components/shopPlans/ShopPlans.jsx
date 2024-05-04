import React, { useState } from 'react'

import { typePlans } from '../../assets/data/typePlans.js'
import { useFormTypeAll } from '../../utils/useFormTypeAll.js'
import MenuPlans from './menuPlans/MenuPlans.jsx'
import ListUserPlans from './listUserPlans/ListUserPlans.jsx'
import styles from './ShopPlans.module.css'

const ShopPlans = () => {
    const plans = useFormTypeAll(typePlans)
    const [arrPlans] = useState(plans.newList)
  
    return (
      <div className={styles.shop}>
        <ListUserPlans />
        <MenuPlans arrPlans = {arrPlans}/>
      </div>
    )
}

export default ShopPlans