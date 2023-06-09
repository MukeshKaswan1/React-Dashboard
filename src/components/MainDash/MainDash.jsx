import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import RightSide from '../RightSide/RightSide'
import './MainDash.css'

const MainDash = () => {
  return (
    <div className="MainDash">
    <h1>DashBoard</h1>
    <Cards />
    <Table />
    <RightSide />
    </div>
  )
}

export default MainDash
