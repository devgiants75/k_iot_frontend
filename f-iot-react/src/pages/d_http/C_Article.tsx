import React from 'react'

/*
! 백엔드의 H_Article 로직과 연결

? 1. 백엔드 API 구조 이해
  @ 1) POST - /api/v1/articles: 게시글 생성 
    > 요청 바디(ArticleCreateRequest)
    > 응답(ArticleDetailResponse, 생성된 게시글 정보)

  @ 2) GET - /api/v1/articles: 게시글 전체 조회
    > 요청 바디 X
    > 응답(ArticleListResponse, 게시글 목록)

  @ 3) GET - /api/v1/articles/{id}: 게시글 단건 조회
    > 요청 바디 X
    > 응답(ArticleDetailResponse, 게시글 단건 정보)

  @ 4) PUT - /api/v1/articles/{id}: 게시글 수정
    > 요청 바디(ArticleUpdateRequest)
    > 응답(ArticleDetailResponse, 수정된 게시글 정보)

  @ 5) DELETE - /api/v1/articles/{id}: 게시글 삭제
    > 요청 바디 X
    > 응답(성공 여부)
*/

function C_Article() {
  return (
    <div>C_Article</div>
  )
}

export default C_Article