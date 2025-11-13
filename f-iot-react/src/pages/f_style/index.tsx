import React from 'react'
import ToggleSection from '@/components/ToggleSection'
import A_CSS from './A_CSS'
import B_Module from './B_Module'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 스타일(Style) ===
      </h1>

      <ToggleSection title="1. 일반 CSS">
        <A_CSS />
      </ToggleSection>
      
      <ToggleSection title="2. Module CSS">
        <B_Module />
      </ToggleSection>
    </div>
  )
}

export default Index