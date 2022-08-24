import React from "react"
import Image from "next/image"
import styles from "./Hero.module.css"
import BackgroundLightMobile from "../../public/bg-mobile-light.jpg"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src={BackgroundLightMobile} layout="fill" />
    </div>
  )
}

export default Hero
