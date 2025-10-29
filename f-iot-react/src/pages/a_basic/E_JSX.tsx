import React from 'react'

// https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  description: '2014/11/30/14/11/',
  imageId: 'cat-551554_1280.jpg',
  name: '아기고양이',
  imageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

/*
! JSX 연습 예제
>> E_JSX 컴포넌트를 a_basic 폴더 내의 index.tsx 파일에서 불러오기(import)

전체 단일 루트 노트(빈 Fragment 사용)
- div 태그: style 속성으로 theme 속성 지정
  >> p 태그: 아기고양이's Picture // 객체에서 '아기고양이'값 사용
  >> img 태그
    - src 속성: 속성들을 + 연산자로 표현
    - alt 속성: name 속성
    - width, height 속성: 각각 imageTheme 지정
*/

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
          src={cat.catUrl + cat.description + cat.imageId} 
          alt={cat.name} 
          width={cat.imageTheme.width}
          height={cat.imageTheme.height}
        />
      </div>
    </>
  )
}

export default E_JSX