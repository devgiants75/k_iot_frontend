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
});