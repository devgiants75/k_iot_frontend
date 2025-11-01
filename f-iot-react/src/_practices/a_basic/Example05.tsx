import React from 'react'

//! 게시글 카드 컴포넌트 (PostCard) ※ Example05 페이지는 필요 없습니다. ※

//! ★ 해당 예제는 월요일 오전에 같이 작성 및 리뷰 예정입니다. ★
//!    실습, 도전용 문제이기 때문에 충분히 아래 설명 읽어보고, 다양하게 작성해보세요
//!    >> 해당 실습 문제 관련 질문은 월요일 수업 이후에 받겠습니다

//? 프로젝트 폴더 구조
// src/
//  ├─ types/
//  │   └─ Post.ts
//  ├─ data/
//  │   └─ posts.ts
//  ├─ components/
//  │   ├─ PostCard.tsx
//  │   └─ PostDetail.tsx
//  ├─ pages/
//  │   └─ PostList.tsx
//  ├─ App.tsx
//  └─ main.tsx

//? 학습 포인트
// - 이벤트 핸들러 정의
// - props로 데이터 전달받기
// - 조건부 렌더링 (삼항연산자, 논리연산자)
// - React Router의 Link 사용

//? 시나리오
// : 게시글 목록 페이지에서 각 게시글을 카드 형태로 보여줍니다.
//   "좋아요" 버튼을 클릭하면 콘솔에 게시글 id가 출력되어야 합니다.
//   제목 길이가 30자를 넘으면 "(긴 제목)" 표시를 추가하고,
//   userId가 1인 글은 "⭐ 특별회원의 글" 문구를 보여줍니다.

//? 요구사항
//& 1. props로 post 객체를 전달받는다. (Post 타입 사용)
//& 2. 버튼 클릭 시 handleLikeClick이 호출되어야 한다.
//& 3. handleLikeClick은 console.log로 “좋아요 클릭됨: id”를 출력한다.
//& 4. 제목이 30자 초과일 경우 "(긴 제목)" 표시를 추가한다. (삼항연산자 사용)
//& 5. userId가 1인 글일 때만 “⭐ 특별회원의 글” 문구를 렌더링한다. (논리연산자 &&)
//& 6. “자세히 보기” 버튼은 해당 게시글 상세 페이지로 이동한다. (Link 사용)

//? Props 정의
// post - Post 타입 객체 (userId, id, title, body 포함)

//? 코드 작성 순서
// 1. PostCardProps 타입 정의 (post: Post)
// 2. PostCard 함수형 컴포넌트 정의 + 구조 분해 할당으로 props 받기
// 3. handleLikeClick 함수 정의
// 4. JSX 내부에서 조건부 렌더링 구현
// 5. 버튼 클릭 시 handleLikeClick 연결
// 6. React Router의 <Link>로 상세 페이지 이동 처리

//? 참고: Post 타입 예시
// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

//# PostCardProps 타입 정의 -> Post 타입의 props를 전달 받음

//# PostCard 컴포넌트 정의 (예시)
// const PostCard = () => {
//   3. 이벤트 핸들러 정의
//   const handleLikeClick = () => {
    
//   };

//   4. JSX + 조건부 렌더링
//   return (
//     <div>
//       {/* 4-1. 제목 길이 조건부 */}

//       {/* 본문 */}

//       {/* 4-2. userId가 1인 경우에만 표시 */}

//       {/* 5. 버튼 클릭 시 이벤트 핸들러 연결 */}
      
//     </div>
//   );
// };

// export default PostCard;


function Example05() {
  return (
    <div>Example05</div>
  )
}

export default Example05