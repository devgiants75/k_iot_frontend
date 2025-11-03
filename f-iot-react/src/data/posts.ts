//! posts.ts (data 폴더)
// : "Post 타입의 게시글 데이터"를 저장하는 배열 (Post[]) 

import type { Post } from "@/types/Post";

//? mock(가짜의) data
// : 실제 데이터가 아닌, 개발 및 테스트를 목적으로 임의로 만든 가짜 샘플 데이터

export const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit..."
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores..."
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut..."
  }
];
