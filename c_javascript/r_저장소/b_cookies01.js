// b_cookies01.js

//# === 쿠키(Cookies) ===
// : 웹 사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일

//! 쿠키의 구성 요소 (구조)
// - 이름(name): 쿠키를 구분하는 식별자
// - 값(value): 쿠키에 저장할 실제 데이터 (문자열)
// - 만료 날짜(expires): 쿠키의 유효기간 (없으면 세션 종료 시 삭제)
// - 경로(path): 쿠키가 접근 가능한 경로 범위
// - 도메인(domain): 쿠키가 유효한 도메인 범위
// - Secure: HTTPS 연결에서만 전송
// - HttpOnly: JavaScript에서 접근 불가 (보안용)

// cf) http://localhost:8080 - 보안이 없는 브라우저 
//      >> http's'(security)

//! 쿠키의 한계
// - 용량 제한: 4KB 이하
// - 보안 취약: 누구나 읽을 수 있음 (개인 정보 저장 금지)

//! 쿠키 생성 및 수정
// : document.cookie 속성
// - 웹 브라우저에 쿠키를 생성하고 관리

//@ 1) 쿠키 생성 및 수정
// document.cookie = "쿠키이름=쿠키값; expires=날짜; path=경로; domain=도메인";
// - 쿠키이름, 쿠키값 (필수)
// - 나머지 (선택)
document.cookie = "username=lsa; path=/;"

//? cf) 경로 VS 도메인
// 경로(path)
// : 쿠키를 접근할 수 있는 URL 경로
// : /, /domin, /user
// - 도메인 뒤에 이어지는 부분
// - 서버(사이트) 내의 특정 파일이나 페이지 위치를 나타냄

// 도메인(domain)
// : 웹 사이트의 주소
// : /example.com, /google.com
// - 쿠키가 유요한 도메인 지정

// +) 같은 이름의 쿠키를 다시 설정(재할당)하면 자동 수정

//@ 2) 만료 날짜 설정
// : expires 속성을 설정
// - 기본값(설정X): 세션 쿠키로 자동 설정
//    >> 브라우저가 닫힐 때 자동 삭제
// - 만료 날짜값은 UTC(협정 세계 시) 시간 단위를 가짐
//    >> KST(한국 표준 시) 시간 단위 +9h 느림
let date = new Date();
// Date 객체 .getTime(): 시간 데이터 가져오기 (밀리초)
//          .setTime(): 시간 데이터 설정

// 1h === 60m
// 1m === 60s
// 1s === 1000ms
// date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
// >> 24시간 (1일)
date.setTime(date.getTime() + (1 * 60 * 1000)); // 10분

let expires = "expires=" + date.toUTCString()
// : 시간을 협정 세계시 문자열로 반환
// : "expires=시간문자열"

document.cookie = "userEmail=qwe123;" + expires + "; path=/";

//? 쿠키 만료 개념
// : 브라우저가 스스로 만료를 관리
// - 자동 삭제(즉시 사라짐) X
// >> 브라우저가 쿠키에 접근하거나 갱신할 때 정리
// >> 만료 시간 후에도 메모리상에는 잠시 남아있을 수 있음 

//@ 3) 쿠키 읽기
// : 쿠키는 하나의 문자열로 반환
console.log(document.cookie);
// username=lsa; username=lsa; userEmail=qwe123
// >> 문자열이기 때문에 직접 파싱

function getCookie(name) {
  let cookies = document.cookie.split('; ');
  // cf) for in 연산자
  // for (변수종류 변수명 in 객체명) { ... }
  // >> 객체의 키(key)를 순회
  // >> 사용 권장 대상: 일반 객체

  // cf) for of 연산자
  // for (변수종류 변수명 of 이터러블) { ... }
  // >> 이터러블(순회할 수 있는 자료형: 배열, 문자열, Map, Set 등)
  // >> 실제 요소 값을 순회
  // >> 사용 권장 대상: 배열, 문자열 등

  for (let cookie of cookies) {
    let [key, value] = cookie.split('='); // 구조분해할당
    if (key === name) return value;
  } 
  return null;
}

console.log(getCookie("userEmail"));

//@ 4) 쿠키 삭제
// : 만료 시간을 과거 시간으로 설정
document.cookie = "username=; expires=Thu, 01, Jan 1970 00:00:00 GMT; path=/";