import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testmonials from '../components/Testmonials'
import GenarateBtn from '../components/GenarateBtn'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <Description/>
        <Testmonials/>
        <GenarateBtn/>
    </div>
  )
}

export default Home