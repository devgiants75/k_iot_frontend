// script.js

// === 구구단 출력기 ===
// : 사용자로부터 정수값을 입력받으면 해당 값의 구구단을 출력

// while문 조건식에 true에 대한 boolean값 적용 시 '무한 루프'
// >> break; 키워드로 사용자 정의 종료

while (true) {
  //! 구구단 출력
  // : 사용자로부터 2 ~ 9까지의 숫자 입력받기

  // cf) prompt로 입력받은 값: string(문자열)
  const input = prompt('출력할 구구단의 숫자를 입력하세요(2 ~ 9) // "exit"를 입력하시면 종료됩니다.');

  if (input.toLowerCase() === 'exit') {
    console.log('프로그램을 종료합니다.');

    break;
  }

  // 입력받은 데이터 값을 숫자 자료형으로 변환: Number()
  const number = Number(input);

  // 입력, 숫자값이 2 ~ 9 사이일 경우 구구단 출력
  // +) 그 외의 숫자값 또는 숫자로 변환할 수 없는 데이터일 경우(Not A Number: NaN) 재입력
  if (number >= 2 && number <= 9) {
    // 구구단 출력
    console.log(`=== ${number}단 ===`);

    for (let i = 1; i <= 9; i++) {
      console.log(`${number} X ${i} = ${number * i}`);
    }
  } else {
    console.log('1에서 9사이의 숫자를 입력해주세요.');
  }
}