import React, { useState } from 'react'

/*
! useState를 사용한 상태 관리 & 이벤트 처리

? == 요구 사항 정리 ==
  1. 사용자 아이디, 비밀번호, 비밀번호 확인, 이메일 주소 입력

  2. 입력 유효성 검사
    : 모든 입력 필드창은 비워질 수 없음
    - 모두 입력해야 함

  3. 상태 관리
    : 입력 값들은 하나의 객체로 useState를 통해 관리 (formData)

  4. 폼 제출
    : 폼 제출 시 모든 입력값이 콘솔에 출력
    - 입력 조건을 만족하지 않는 경우 오류 메시지 출력
      > 오류 메시지도 상태 관리
*/

interface FormData {
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const initialFormData: FormData = {
  id: '',
  password: '',
  confirmPassword: '',
  email: ''
}

function State04() {
  //^ === Hooks === //
  // 1) 폼 데이터 상태 관리
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // 2) 폼 입력 오류 메시지 상태 관리
  const [error, setError] = useState<FormData>(initialFormData);

  // + 폼 데이터 구조 분해 할당
  const { id, password, confirmPassword, email } = formData;

  //^ === Event Handler === //
  // 1) 입력 필드의 변경을 감지하는 이벤트 핸들러
  const handleSignUpInputChange = () => {
    
  }

  // 2) 폼 제출 이벤트를 처리하는 이벤트 핸들러 
  // : 제출 전 각 입력 요소에 대한 유효성 검사
  const handleSignUpSubmit = () => {

  }

  return (
    <div
      style={{
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        textAlign: 'center'
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>
            아이디
            <input 
              type="text" 
              name='id'
              value={formData.id}
              onChange={handleSignUpInputChange}
            />
          </label>
        </div>
      </form>
    </div>
  )
}

export default State04