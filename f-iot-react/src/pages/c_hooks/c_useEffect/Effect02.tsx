import React, { useEffect, useState } from "react";

//! JSONPlaceholder의 posts 데이터를 비동기 함수로 가져오기
// async, await, fetch()

// - 게시물 가져오기
//   >> 로딩, 성공, 실패
//   >> 해당 컴포넌트가 '마운팅될 때만 실행'

//? 각 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
};

function Effect02() {
  //? 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //? 데이터를 불러오는 비동기 함수
  async function fetchPosts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      //? 데이터 처리 완료 (성공)
      setPosts(data);
      setLoading(false);
    } catch (e) {
      //? 예외 발생 (실패)
      setLoading(false);

      // 에러 객체(e)의 타입을 단언(Error 타입)
      // : 컴파일러에게 Error 객체 내부의 message 속성의 접근을 명시
      setError((e as Error).message);
    }
  }

  //? 컴포넌트가 마운트 될 때만 한 번 실행
  useEffect(() => {
    fetchPosts();
    console.log("컴포넌트가 마운트되면 실행");
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "lightblue",
      }}
    >
      <h4>Posts 게시물</h4>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {loading && <div>게시물을 로딩 중입니다.</div>}
      {error && <div>Error: {error}</div>}
      {/* '
      {filteredPosts.map((post) => (
        <li key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </li>
      ))} 
       */}
    </div>
  );
}

export default Effect02;
