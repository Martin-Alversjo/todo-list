import React from "react"
import Image from "next/image"
import styles from "./Header.module.css"

import IconMoon from "../../public/icon-moon.svg"

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>TODO</h1>
      </div>
      <Image src={IconMoon} />
    </div>
  )
}

export default Header
