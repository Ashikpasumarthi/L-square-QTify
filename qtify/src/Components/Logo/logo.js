import React from 'react'
import LogoLink from '../../assets/logo.png'
import styles from './Logo.module.css'
export default function Logo() {
  return (
    <div >
      <img src={LogoLink} className={styles.logo} alt="logo" />
    </div>

  )
}
