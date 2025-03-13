import Communion from '@/components/Communion/Communion'
import Hero from '@/components/Hero/Hero'
import JoinConversation from '@/components/JoinConversation/JoinConversation'
import MomentsConnection from '@/components/JoinConversation/MomentsConnection'
import React from 'react'

function Home() {
  return (
    <div>
      <Hero />
      <Communion />
      <JoinConversation />
      <MomentsConnection />
    </div>
  )
}

export default Home
