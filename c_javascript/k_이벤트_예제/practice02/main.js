// main.js

/* 
  검색 필터 기능

  1) 사용자로부터 내용값을 입력받아
  2) list item들을 순회하여 해당 입력값이 포함된 아이템만 display 속성을 '' 빈 문자열 할당 (보여짐)
*/

document.addEventListener('DOMContentLoaded', () => {
  //! HTML 요소 가져오기
  const input = document.querySelector('#search-input');
  const items = document.querySelectorAll('li');
  const noResult = document.querySelector('#no-result');

  input.addEventListener('input', () => {
    // input 요소의 입력값 가져오기
    let value = input.value.toLowerCase();

    // 보여지는 아이템의 수를 저장
    // : 입력값이 아이템의 내용에 포함되어 필터링 되는 데이터의 수
    // >> no-result 관리
    let visibleItemsCount = 0;

    items.forEach(item => {
      // HTML요소.textContent: HTML 요소 객체의 내용값

      // 데이터.includes(값)
      // : 데이터 안에 값의 포함 여부를 boolean 반환
      // >> 데이터: 배열, 문자열 사용 가능
      if (item.textContent.toLowerCase().includes(value)) {
        // CSS display 속성에 ''(빈 문자열)
        // >> 속성을 보여줌
        item.style.display = '';
        visibleItemsCount++; // 포함되는 요소(필터링 된 요소)의 개수 카운팅
      } else {
        // 포함되지 않은 경우 숨김
        item.style.display = 'none';
      }
    });

    // 보여지는 아이템이 있을 경우 no-result: none처리
    //  , 없을 경우 no-result: block 처리
    noResult.style.display = visibleItemsCount > 0 ? 'none' : 'block';
  });
});