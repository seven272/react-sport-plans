import React from 'react'

import styles from './Radio.module.css'

const Radio = ({
  text = '',
  val,
  changed,
  checked = false,
  isDisabled = false,
  id,
  classRadio,
}) => {
  return (
    <div className={styles.radio__wrapper}>
      <label htmlFor={id} className={styles.radio__label}>
        <input
          className={styles.radio__input}
          type="radio"
          name="radioButton"
          value={val}
          id={id}
          checked={checked}
          onChange={changed}
          disabled={isDisabled}
        />
        <span className={styles.radio__custom}></span>
        {text && <span className={styles.radio__text}>{text}</span>}
      </label>
    </div>
  )
}

export default Radio
