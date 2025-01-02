import React from 'react'
import Members from "../minicomponents/Members"
import Qualities from "../minicomponents/Qualities"
import Hero from "../minicomponents/Hero"

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Members></Members>
      <Qualities></Qualities>
    </div>
  )
}

export default Home