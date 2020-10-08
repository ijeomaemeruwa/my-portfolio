import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import { Skills } from '../../components/Skills/Skills'
//import { Projects } from '../../components/Projects/Projects'
import { MyWork } from '../../components/MyWork/MyWork'

export const Home = () => {
    return (
    <div className="home_page">
      <Hero /> 
      <Skills />
      <MyWork />     
    </div>
    )
}
