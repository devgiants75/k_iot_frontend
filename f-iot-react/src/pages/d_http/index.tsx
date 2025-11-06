import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import B_Axios from './B_Axios'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 HTTP 통신 ===
      </h1>

      <ToggleSection title="1. Axios">
        <B_Axios />
      </ToggleSection>
    </div>
  )
}

export default Index