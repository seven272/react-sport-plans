import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hello.module.css'
import helloImg from '../../assets/images/hello.png'
// import Button from '../../UI/button/Button'

const Hello = () => {
  return (
    <div className={styles.hello}>
        <h1 className={styles.title}>План на первый марафон</h1>
        <p className={styles.subtitle}>План подготовки к марафону на 18 недель</p>
        <img src={helloImg} alt={helloImg} className={styles.img}/>
        {/* <Button classBtn='large__btn' clickBtn={() => (<Link to='/test'></Link> )}><Link to='/test'>Начнем!</Link> </Button> */}
    </div>
  )
}

export default Hello