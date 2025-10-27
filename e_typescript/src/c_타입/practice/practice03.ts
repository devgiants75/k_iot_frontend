// practice03.ts

document.addEventListener('DOMContentLoaded', () => {
  // 1) DOM 요소 타입 단언
  const input = document.getElementById('username') as HTMLInputElement;
  const button = document.getElementById('saveButton') as HTMLButtonElement;
  const resultDiv = document.getElementById('result') as HTMLDivElement;

  // 2) 버튼 클릭 시 동작
  button.addEventListener('click', () => {
    const username = input.value.trim();

    if (!username) {
      resultDiv.innerText = '이름을 입력해주세요.';
      return;
    }

    // 3) JSON 문자열 생성
    const jsonData = JSON.stringify({ name: username, age: 30 });

    // 4) JSON >> 객체 변환 (타입 단언)
    type User = { name: string; age: number };
    const user = JSON.parse(jsonData) as User;

    // 5) DOM 반영
    resultDiv.innerText = `${user.name} (${user.age})`;
  });
})

//! == innerHTML VS innerText VS textContent ==
document.addEventListener('DOMContentLoaded', () => {
  let a = document.getElementById('a');
  let b = document.getElementById('b');
  let c = document.getElementById('c');

  const element = document.getElementById('myDiv');

  if (element) {
    // 요소?
    // : 해당 요소가 있을 경우에 추후의 로직 실행 (선택 옵션)
    a?.addEventListener('click', () => {
      alert(element.innerHTML); // DIV 안에 있는 HTML 전체 내용을 반환
    });
  
    b?.addEventListener('click', () => {
      alert(element.innerText); // Element 내에서 "사용자에게 보여지는" 텍스트 값을 반환
    });
  
    c?.addEventListener('click', () => {
      alert(element.textContent); // 태그와 상관없이 해당 요소가 가지는 텍스트 내용값을 그대로 반환
    });
  }
})