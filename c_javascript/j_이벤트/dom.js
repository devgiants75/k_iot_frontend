// dom.js

//! === JS 내의 HTML 인식 ===
// : 자바스크립트 객체로 웹 문서를 인식
// - DOM(Document Object Model)으로 인식

// body > div > p > span
/*
body {
  div: {
    p: {
      span: 
    }
  }
}

<body>
  <div>
    <p>
      <span></span>
    </p>
  </div>
</body>

*/

// 1. document.querySelector('선택자');
// : 같은 선택자가 여러 개일 경우 첫 번째 요소만 가져옴

const btnButton = document.querySelector('.btn');

btnButton.onclick = function() {
  console.log('.btn 요소 중 첫 번째 요소가 클릭되었습니다.');
}

// 2. document.querySelectorAll('선택자');
// : 여러 개의 요소 참조를 모두 가져와서 한 번에 이벤트 핸들러 등록
// - 배열로 반환 (주로 forEach와 결합)
const btnButtons = document.querySelectorAll('div');

btnButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = btn.style.backgroundColor === 'red' ? 'blue': 'red';
  })
})