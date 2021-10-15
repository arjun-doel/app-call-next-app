import Head from 'next/head'
import React, { useEffect }  from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home = () => {
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
      console.log(data)
      // setFilteredCountries(data)
    }
    getData()
  }, [])

  return (
    <div>Hello world</div>
  )
}

export default Home
