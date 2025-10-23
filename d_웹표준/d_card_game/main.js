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
  function initializeGame() {
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

  //? 전역 변수 선언
  // 1) 게임 시작 상태 추적 변수
  // : 시작 버튼과 재시작 버튼에 대한 이벤트 리스너에 활용
  let isGameStarted = false;

  // 2) 카드가 뒤집혔는지 여부
  let hasFlippedCard = false; // 첫 번째 카드가 선택되지 않은 것이 기본값
  
  // 3) 첫 번째, 두 번째 선택된 카드
  let firstCard, secondCard;

  // 4) 게임판 잠김 여부
  let lockBoard = false; // 잠기지 않은 것이 기본값

  //@ 4. 카드를 뒤집는 함수 정의
  // : 각 카드 클릭 시 호출
  function flipCard() {
    if (!isGameStarted || lockBoard) return; 

    //? this 키워드
    //  : 함수 선언문에서 this는 해당 함수가 실행된 객체 그 자체
    this.classList.add('flipped');

    if(!hasFlippedCard) {
      hasFlippedCard = true; 
      firstCard = this;
    } else {
      hasFlippedCard = false; // 다음 쌍의 선택을 위한 기본값 선언
      secondCard = this;
    }

    //? 두 카드가 일치하는지 확인
    checkForMatch();
  }

  // document.querySelector('')
  // >> 해당 문서 내에서 선택자 검색

  // A요소.querySelector('')
  // >> A요소 내부의 선택자 검색

  //@ 5. 두 카드가 일치하는지 확인하는 함수 정의
  function checkForMatch() {
    if (!firstCard || !secondCard) return;

    let isMatch = 
      firstCard.querySelector('.card-back').style.backgroundColor
        === secondCard.querySelector('.card-back').style.backgroundColor;

    isMatch ? disabledCards() : unflipCards();
  }

  //@ 6. 매치된 카드를 처리하는 함수 정의
  function disabledCards() {
    // 카드를 뒤집는 기능을 제거
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    //? 새로운 카드 선택을 위한 초기화 (전역 변수 초기화)
    resetBoard();
  }

  //@ 7. 매치되지 않은 카드를 다시 뒤집는 함수 정의
  function unflipCards() {
    lockBoard = true; // 게임판 잠금

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      // 게임판 초기화 
      resetBoard();
    }, 1000);
  }

  //@ 8. 게임판 변수 초기화 함수 정의
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //@ 9. 버튼 가기성 토글 함수
  function toggleButtonVisibility(isGameStarted) {
    // 게임 시작 여부가 true면: 보여지지 않음
    startButton.style.display = isGameStarted ? 'none' : 'block';

    // 게임 시작 여부가 false면: 보여지지 않음
    resetButton.style.display = isGameStarted ? 'block' : 'none';
    completedButton.style.display = isGameStarted ? 'block' : 'none';
  }

  //^ 각 버튼에 대한 이벤트 핸들러 등록
  //? 게임 시작 시간을 기록할 변수 선언
  let gameStartTime;

  //@ 시작 버튼
  startButton.addEventListener('click', () => {
    initializeGame(); // 게임 초기화

    gameStartTime = new Date(); // 현재 시간을 게임 시작 시간으로 설정

    // 버튼의 가시성 조정: 시작X, 재시작O, 완료O 
    toggleButtonVisibility(true);

    revealCardsTemporary(); // 모든 카드를 일시적으로 공개

    isGameStarted = true;
  });

  //@ 재시작 버튼
  resetButton.addEventListener('click', () => {
    initializeGame(); // 게임 초기화

    gameStartTime = new Date();

    toggleButtonVisibility(true);

    revealCardsTemporary();
    isGameStarted = true;
  });

  //@ 완료 버튼
  completedButton.addEventListener('click', () => {
    // 모든 카드가 뒤집혀있는지 확인

    // every() 메서드
    // : (콜백)함수를 인자로 받는 배열 메서드 
    // - 배열의 모든 요소가 주어진 함수 조건식을 만족할 때 (true값일 경우) true를 반환
    // - 모든 카드 요소에 flipped 클래스 속성이 존재하면 >> 모두 뒤집어짐
    const allFlipped = Array.from(document.querySelectorAll('.card')).every(
      card => card.classList.contains('flipped')
    );

    //? document.querySelectorAll('');
    // >> 배열과 비슷한 객체 (NodeList 객체)
    // >> 배열 콜백 메서드 사용 시 실질적인 배열로 변환이 필수
    // Array.from(NodeList)를 사용해야 .map(), .every(), .filter() 사용 가능

    if (allFlipped) {
      // 모든 카드가 뒤집힌 경우
      const gameTime = new Date() - gameStartTime;

      // new Date(): 현재 날짜, 시간을 밀리초 단위로 반환
      alert(`게임 완료! 소요시간: ${Math.floor(gameTime / 1000)} 초`);

      isGameStarted = false;

      initializeGame();

      toggleButtonVisibility(false); // 시작 버튼만 보이도록
    } else {
      alert('완료되지 않았습니다.');
    }
  });

  // 버튼 표시 - 초기에는 시작 버튼만 표시
  toggleButtonVisibility(false);
  // 게임 초기화 & 화면 렌더링
  initializeGame();
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