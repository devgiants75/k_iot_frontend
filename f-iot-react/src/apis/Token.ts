// Token.ts

//! AccessToken & RefreshToken

//? JWT 기반 인증 구조
// : 일반적인 웹앱 로그인 과정
// 1. 사용자가 아이디/비밀번호로 로그인 요청을 보냄
// 2. 서버는 검증 후 Access Toekn + Refresh Token 두 개 발급함
// 3. 클라이언트는 AccessToekn을 저장(보통 메모리/Zustand 등)
//    + Refresh Token은 HTTP Only 쿠키로 저장
// 4. 이후 토큰이 필요한 API 요청 시 Authorization: Bearer <AccessToken> 형태로 보냄
// 5. 서버는 AccessToken을 검증하고 사용자 권한을 확인

//? AccessToken이 "짧은 만료시간"을 가지는 가?
// @ 보안상 이유
//   : AccessToken은 사용자 정보가 암호화되어 저장
//   - 토큰이 탈취될 경우 공격자가 해당 사용자처럼 행동 가능

//   > Access Token은 유효기간을 10~15분 정도로 짧게 설정
//     : 유출되더라도 피해 기간을 최소화 (토큰 탈취 리스트 최소화)

//? AccessToken이 짧을 경우의 불편함!
//  : Access 토큰의 만료기간(10~15분) 마다 다시 로그인
//  - 해당 불편함을 줄이기 위해 Refresh Token이 존재!

//? Refresh Token의 역할
//  : Access Token을 재발급할 수 있는 권한을 의미                   [AccessToken]
//  - 만료 수명     > 김                                      | 짧음 (15분 ~ 30분)
//  - 저장 위치     > HTTP Only 쿠키 (JS 접근 불가)             | 메모리 / localStorage
//  - 노출 위험     > 낮음 (쿠키로만 전송)                      | 높음 (API 헤더에 직접 포함)
//  - 역할         > AccessToken 재발급용                     | API 요청 시 인증 증명
//  - 노출 시 위험  > AccessToken 재발급만 가능, 즉시 사용 불가   | 즉시 피해 가능