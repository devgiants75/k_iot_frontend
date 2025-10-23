//! 카드 메모리 게임 (카드 매칭 게임)
// : 사용자가 카드를 클릭하여 뒤집고
//    , 같은 색상의 카드를 매칭시키는 게임

// +) 게임 초기화, 카드 뒤집기, 매칭 검사
//      , 게임 완료 확인 등의 기능을 포함

//# 문서의 로딩이 완료되면 함수 실행
document.addEventListener('DOMContentLoaded', () => {
  //! HTML 요소 선택
  const cardContainer = document.getElementById('card-container');
  //    >> 내부에 동적으로 생성되는 .card 요소를 전달

  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const completedButton = document.getElementById('completed-button');

  //! 색상 배열 정의 (6개 - 임의의 색상 지정 가능)
  // const colors = ['black', 'red', 'yellow', 'pink', 'orange', 'blue' ];

  const colors = [
    "#cc3131",
    "#e3ddbb",
    "#23b923",
    "#34bcbc",
    "#3939db",
    "#e5b7e4",
  ];

  //! colors 배열의 색상을 복제하여 새로운 배열 cardColors 생성
  //? 스프레드(...) 연산자 사용
  //  >> 모든 요소를 새로운 배열에 두 배 포함되도록 복사
  let cardColors = [...colors, ...colors];

  //@ 1. 게임을 초기화하는 함수
  // 1) cardColors 색상 배열 섞기
  // 2) 해당 색상을 cardContainer 내부의 HTML(.card-back) 요소에 배치
  // 3) 12개의 카드를 생성하면 요소 할당
  function initializeCame() {
    //? cardColors 배열 섞기 (혼합)
    // : shuffle() 사용자 함수 사용 - 배열 요소의 순서를 무작위로 섞음
    shuffle(cardColors);

    //? cardContainer 내부의 HTML 초기화
    // : 게임 새로 시작 시 기존의 카드를 제거
    cardContainer.innerHTML = '';

    //? 12개 카드를 for 반복문으로 생성하여 HTML 요소로 할당
    for (let i = 0; i < 12; i++) {
      cardContainer.innerHTML += `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="./front.jpg" alt="카드의 앞면">
            </div>
            <div class="card-back" style="background-color: ${cardColors[i]};"></div>
          </div>
        </div> 
      `;
    }

    //? 12장의 각 카드에 이벤트 리스너를 추가하는 함수 호출
    // : 카드 클릭 시 동작을 정의
    addCardEventListner();
  }

  //@ 2. 시작 시 잠시동안 모든 카드의 뒷면(색상)을 공개하는 함수 정의
  function revealCardsTemporary() {
    // 'completed-button' (완료 버튼)을 비활성화
    // > 카드가 뒤집힐 당시에 사용자의 컨트롤을 막는 로직

    //? DOM요소에 속성 지정
    // DOM요소.setAttribute(속성, 속성값);
    // DOM요소.속성명 = 속성값;

    //? bool 속성
    // 속성값이 true, false 뿐! (기본값: false)
    // disabled 속성: 요소에 대한 컨트롤의 비활성화를 지정
    completedButton.disabled = true; 

    //? 모든 카드 뒤집기(뒷면 공개 - 색상)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        // 각 요소를 모두 뒤집기
        card.classList.add('flipped');
      })
    }, 100); // 0.1초 뒤에 뒤집기

    //? 모든 카드 뒤집기(앞면 공개 - 이미지)
    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        // 각 요소를 다시 원래 상태로 되돌림
        card.classList.remove('flipped');
      });

      //? 완료 버튼 다시 활성화
      completedButton.disabled = false;
    }, 2000); // 2초 뒤에 복구
  }

  //@ 3. 모든 카드 요소에 클릭 이벤트 리스너를 추가하는 함수 정의
  // : 카드 클릭 시 해당 카드만! 뒤집는 기능 구현
  function addCardEventListner() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', flipCard); // flipCard 함수 등록
    })
  }

  //@ 4. 카드를 뒤집는 함수 정의
  function flipCard() {

  }

  //@ 5. 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {

  }

  //@ 6. 매치된 카드를 처리하는 함수 정의
  function disabledCards() {

  }

  //@ 7. 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {

  }

  // 게임 초기화 & 화면 렌더링
  initializeCame();
});


//# 배열의 요소를 무작위로 섞는 사용자(커스텀) 함수
// : 배열의 각 요소를 다른 임의의 위치와 교환
function shuffle(array) {
  // 배열의 마지막 요소부터 시작하여 첫 번째 요소까지 역순으로 반복
  // : 배열의 마지막 요소의 인덱스 번호 === length - 1

  // i는 11부터 0까지 반복 (요소 12개)
  let length = array.length;

  //? 현재 요소(i)와 무작위로 선택된 요소(j)의 위치 교환
  for (let i = length - 1; i > 0; i--) {
    // Math.random() * (i + 1)
    // : 0부터 i까지의 무작위 인덱스 생성
    // +) Math.floor(): 소수점 내림
    let j = Math.floor(Math.random() * (i + 1));

    //? 구조 분해 할당
    // : 배열의 i번째 요소와 j번째 요소를 서로 바꿈
    [array[i], array[j]] = [array[j], array[i]];
    // EX: i(11), j(8)

    //? '피셔-에이츠 셔플'의 알고리즘 기반
  }
}