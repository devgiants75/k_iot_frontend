import React, { useState } from 'react'

//! useState: "컴포넌트 내에서" 데이터에 대한 상태 관리
// - 주로 UI에서 발생하는 이벤트에 반응하여 상태 변화

function State02() {
  //^ === HOOKS (useState) === //
  const [inputValue, setInputValue] = useState<string>('');

  //^ === EVENT HANDLER === //
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // input 창에 change 변화가 일어나면 처리(handle)할 로직

    let inputValue = e.target.value; // 이벤트 객체의 target 속성 === 이벤트가 발생한 input 태그
    setInputValue(inputValue);
  }


  return (
    <div>
      <p>useState & 이벤트 핸들러</p>

      <input 
        type="text" 
        value={inputValue}
        // onChange 이벤트
        // : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        // - input, select, textarea 등의 요소에 적용
        onChange={handleInputChange}
      />
    </div>
  )
}

export default State02