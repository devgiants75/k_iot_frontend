// event02.js

//? random 함수 정의: 0부터 255까지의 랜덤 숫자 생성
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//? randomColorFunc 함수 정의: 랜덤 색상 생성
function randomColorFunc(event) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // event: 해당 함수가 실행된 이벤트에서
  // target: 직접 이벤트가 발생 요소의 값을 불러와
  // style: 해당 요소 스타일의
  // backgroundColor: 배경색을
  // randomColor: 무작위색으로 지정
  event.target.style.backgroundColor = randomColor;
}

//! === 이벤트 객체 === //
// : 이벤트 핸들러가 호출될 떄
//    , 브라우저가 자동으로 '이벤트 객체'를 생성하여 이벤트 핸들러에게 전달
// - 이벤트와 관련된 다양한 속성과 메서드가 포함

//! === 이벤트 속성과 메서드 === //

//? 1. type 
// : 이벤트 유형 명시 (EX: 'click', 'change' 등)

//? 2. target
// : 이벤트가 발생한 요소를 '참조'
// > '실질적'으로 이벤트가 발생한 요소
// > 이벤트 발생 시 변경을 적용할 요소를 결정하는 데 사용

//? 3. currentTarget
// : 이벤트 리스너가 실제로 첨부된 요소를 '참조'

//? 4. preventDefault()
// : 브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지
// > 1) a 태그의 링크 기능 방지
// > 2) form 태그 안의 submit 역할 방지 (새로고침)

//? 5. stopPropagation()
// : 이벤트가 전파되는 것을 방지
// > 상위 요소로의 이벤트 전파를 중단

// +) 마우스 이벤트 - 마우스의 위치(좌표), 버튼 상태 등
// +) 키보드 이벤트 - 눌려진 키에 대한 정보를 포함

//! 이벤트 객체 사용 방법
// : 이벤트가 발생하는 함수(이벤트 핸들러)에 매개변수로 자동 전달
// > 매개변수 지정 - event, evt, 'e' 등으로 명명 권장

// == target == //
const colorChangeButton = document.querySelector('#colorChangeButton');
colorChangeButton.addEventListener('click', randomColorFunc);

const divs = document.querySelectorAll('.colorDiv');
divs.forEach(div => div.addEventListener('dblclick', randomColorFunc));

// == currentTarget == //
const container = document.querySelector('#container');
const inners = document.querySelectorAll('.inner');

// - 이벤트 등록: container
// - 이벤트가 발생한 요소: 정해지지 X
// container.addEventListener('click', function(event) {

// });

container.addEventListener('click', (event) => {
  console.log('클릭된 요소 (target): ' + event.target);

  console.log('이벤트 리스너가 부착된 요소 (currentTarget): ' + event.currentTarget);

  console.log('이벤트 유형 (type): ' + event.type);
});