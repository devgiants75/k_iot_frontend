import React from 'react'
import ToggleSection from '@/components/ToggleSection'
import A_CSS from './A_CSS'
import B_Module from './B_Module'
import C_StyleComponents from './C_StyleComponents'
import D_Emotion from './D_Emotion'
import D_EmotionPractice from './emotion-practice/EmotionPractice'

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
      
      <ToggleSection title="3. Styled Components">
        <C_StyleComponents />
      </ToggleSection>

      <ToggleSection title="4. Emotion">
        <D_Emotion />
      </ToggleSection>

      <ToggleSection title="5. Emotion + 반응형">
        <D_EmotionPractice />
      </ToggleSection>
    </div>
  )
}

export default Index