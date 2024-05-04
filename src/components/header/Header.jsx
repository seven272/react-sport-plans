import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineNightlightRound } from 'react-icons/md'
import { GrSun } from 'react-icons/gr'
import { BiSwim } from 'react-icons/bi'
import { MdDirectionsBike } from 'react-icons/md'
import { FaRunning } from 'react-icons/fa'
import { SiStreamrunners } from 'react-icons/si'

import styles from './Header.module.css'
import Logo from '../../assets/images/logo-run.png'
import useTheme from '../../utils/useTheme'

const Header = () => {
  const { handleToggleTheme, theme } = useTheme()
  const styleIcons = {color: 'var(--font-color)'}

  return (
    <div className={styles.header}>
      <div className={styles.wrap__top}>
        <div className={styles.logo}>
          {/* <SiStreamrunners /> */}
          <BiSwim size={40} style={styleIcons}/>
          <MdDirectionsBike size={40} style={styleIcons}/>
          <FaRunning size={40} style={styleIcons}/>
          {/* <img
            className={styles.image}
            src={Logo}
            alt="logo pull-ups"
          /> */}
          <span className={styles.logo__title}>
            Тренировачные планы
          </span>
        </div>

        <div className={styles.theme}>
          {theme === 'light' ? (
            <div
              className={styles.theme__wrapper}
              onClick={() => handleToggleTheme('dark')}
            >
              <GrSun className={styles.theme__icon} />
              <span className={styles.theme__title}>
                светлая тема
              </span>
            </div>
          ) : (
            <div
              className={styles.theme__wrapper}
              onClick={() => handleToggleTheme('light')}
            >
              <MdOutlineNightlightRound
                className={styles.theme__icon}
              />
              <span className={styles.theme__title}>темная тема</span>
            </div>
          )}
        </div>
      </div>

      <ul className={styles.items}>
        <li className={`${styles.item} ${styles.active}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Главная
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Магазин планов
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="plan"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Мой план
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="addworkout"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Создать тренировку
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Инфо
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Профайл
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="result"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Результаты
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
