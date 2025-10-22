// c_cookies02.js

//! 쿠키 설정
document.cookie = "cookies02=쿠키2; path=/";
// > 도메인값: http://127.0.0.1:5500 (Live Server 포트 번호)
// > 경로값: /
//          ? K6_iot_frontend 프로젝트의 전 파일에서 접근 가능

// cf) 현 파일의 live server 경로
// : /c_javascript/r_저장소/c_cookies02.js

//! 쿠키 읽기
// 1) document.cookie에서 반환된 문자열 분석
// 2) 특정 쿠키 이름을 찾아 해당 값 추출
document.cookie = 'userAge=29; path=/';

function getCookieValue(cookieName) {
  let cookies = document.cookie.split(';');

  let length = cookies.length;

  for (let i = 0; i < length; i++) {
    // 쿠키의 개수 만큼 반복
    let cookie = cookies[i]; // 배열 순회 + 각 쿠키를 변수에 저장

    let parts = cookie.split('='); // 쿠키를 이름과 값으로 분리
    let name = parts[0].trim();
    if (name === cookieName) {
      return parts[1]; // 값이 있으면 내용을 반환
    }
  }
  return ''; // 일치하는 쿠키명이 없으면 빈 문자열 반환 (예외 방지)
}

let username = getCookieValue('username');
console.log("username: " + username);

let userAge = getCookieValue('userAge');
console.log("userAge: " + userAge);

// +) 쿠키값 변경
document.cookie = "username=이승아; path=/";

let changeUsername = getCookieValue('username');
console.log(changeUsername);