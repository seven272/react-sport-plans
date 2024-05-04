import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Input from '../../../UI/input/Input'
import Button from '../../../UI/button/Button'
import styles from './Forms.module.css'

const PulseForm = ({ getData }) => {
  const zonesPulse = useSelector((state) => state.user.pulses)

  const [pulses, setPulses] = useState({
    ...zonesPulse,
  })

  const [maxPulse, setMaxPulse] = useState(null)
  const [showMaxPulse, setShowMaxPulse] = useState(false)

  const getMaxPulse = (payload) => {
    setMaxPulse(payload.value)
  }

  const countPulse = (evt) => {
    evt.preventDefault()
    const arrPulseParam = [50, 59, 60, 69, 70, 79, 80, 89, 90, 100]
    const arrNewPulseZone = arrPulseParam.map((item) => {
      return Math.round((item / 100) * maxPulse)
    })
    getData({
      zone1: `${arrNewPulseZone[0]}-${arrNewPulseZone[1]}`,
      zone2: `${arrNewPulseZone[2]}-${arrNewPulseZone[3]}`,
      zone3: `${arrNewPulseZone[4]}-${arrNewPulseZone[5]}`,
      zone4: `${arrNewPulseZone[6]}-${arrNewPulseZone[7]}`,
      zone5: `${arrNewPulseZone[8]}-${arrNewPulseZone[9]}`,
    })
    setShowMaxPulse(true)
  }

  const handlePulseZone = (pulse) => {
    switch (pulse.name) {
      case 'zone1':
        return setPulses({ ...pulses, zone1: pulse.value })
      case 'zone2':
        return setPulses({ ...pulses, zone2: pulse.value })
      case 'zone3':
        return setPulses({ ...pulses, zone3: pulse.value })
      case 'zone4':
        return setPulses({ ...pulses, zone4: pulse.value })
      case 'zone5':
        return setPulses({ ...pulses, zone5: pulse.value })
      default:
        return setPulses({ ...pulses })
    }
  }

  const saveHandlePulseZone = () => {
    getData(pulses)
  }

  return (
    <div className={styles.form}>
    

      <form className={styles.form__pulse_auto}>
        <h3 className={styles.form__title}>
          Расчитать автоматически от максимального пульса
        </h3>
        <Input
          myId="autopuls"
          myClass="text"
          myType="number"
          myLabel="Максимальный пульс"
          myValue={''}
          plchl="введите максимальный пульс..."
          getData={getMaxPulse}
        />
        <Button classBtn="button" clickBtn={countPulse}>
          Расчитать пульс
        </Button>
        {showMaxPulse && <span className={styles.form__pulse_result}>Пульсовые зоны расчитаны от максимального пульса {maxPulse}</span>}
        
      </form>

      <h3 className={styles.form__title}>Ввести пульс в ручную</h3>
      <ul className={styles.pulse__items}>
        <li className={styles.pulse__item}>
          <span className={styles.pulse__item_title}>
            Очень легко
          </span>
          <div className={styles.pulse__item_wrapper}>
            <Input
              myId="zone1"
              myClass="pulse"
              myType="text"
              myLabel="от и до"
              plchl="например, 115-130"
              myValue={zonesPulse.zone1}
              getData={handlePulseZone}
            />
          </div>
        </li>
        <li className={styles.pulse__item}>
          <span className={styles.pulse__item_title}>Легко</span>
          <div className={styles.pulse__item_wrapper}>
            <Input
              myId="zone2"
              myClass="pulse"
              myType="text"
              myLabel="от и до"
              plchl="например, 130-150"
              myValue={zonesPulse.zone2}
              getData={handlePulseZone}
            />
          </div>
        </li>
        <li className={styles.pulse__item}>
          <span className={styles.pulse__item_title}>
            Средние усилия
          </span>
          <div className={styles.pulse__item_wrapper}>
            <Input
              myId="zone3"
              myClass="pulse"
              myType="text"
              myLabel="от и до"
              plchl="например, 150-170"
              myValue={zonesPulse.zone3}
              getData={handlePulseZone}
            />
          </div>
        </li>
        <li className={styles.pulse__item}>
          <span className={styles.pulse__item_title}>Интенсивно</span>
          <div className={styles.pulse__item_wrapper}>
            <Input
              myId="zone4"
              myClass="pulse"
              myType="text"
              myLabel="от и до"
              plchl="например, 170-190"
              myValue={zonesPulse.zone4}
              getData={handlePulseZone}
            />
          </div>
        </li>
        <li className={styles.pulse__item}>
          <span className={styles.pulse__item_title}>Максимум</span>
          <div className={styles.pulse__item_wrapper}>
            <Input
              myId="zone5"
              myClass="pulse"
              myType="text"
              myLabel="от и до"
              plchl="например, 190-210"
              myValue={zonesPulse.zone5}
              getData={handlePulseZone}
            />
          </div>
        </li>
      </ul>
      <Button classBtn="button" clickBtn={saveHandlePulseZone}>
        Сохранить данные
      </Button>
    </div>
  )
}

export default PulseForm
