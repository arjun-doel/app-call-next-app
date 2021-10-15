import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  console.log(process.env.OPEN_WEATHER_KEY)
  return (
    <div>Hello world</div>
  )
}

export default Home
