import React, { useEffect, useState } from "react";

import { mockApi } from "./B_Axios";
import type { Post } from "./Post";

function PostForm() {
  //^ Hooks
  const [inputValue, setInputValue] = useState<Post>({
    title: "",
    body: "",
  });

  const { title, body } = inputValue;

  const storedId = localStorage.getItem("editingPostId");

  useEffect(() => {
    const fetchPost = async () => {
      if (storedId) {
        try {
          const response = await mockApi.get(`/posts/${storedId}`);
          const post = response.data; // 응답 내부의 데이터 추출

          setInputValue({
            title: post.title,
            body: post.body,
          });
        } catch (e) {
          console.error("게시글 조회 실패: ", e);
        }
      }
    };

    fetchPost();
  }, [storedId]);

  //^ Event Handler
  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (storedId) {
        // 수정
        await mockApi.put(`/posts/${storedId}`, { title, body });
        alert('수정 완료');
        localStorage.removeItem('editingPostId');
      } else {
        // 생성

        if (title.trim() && body.trim()) {
          await mockApi.post("/posts", { title, body });
          alert('등록 완료');
        } else {
          alert('제목과 내용을 반드시 작성해주세요.')
        }
      }

      setInputValue({
        title: '',
        body: ''
      });

    } catch(e) {
      console.error("요청 실패: ", e);
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div>
      <h2>{storedId ? "게시글 수정" : "게시글 생성"}</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputValueChange}
        placeholder="제목"
      />
      <br />
      <textarea
        name="body"
        value={body}
        onChange={handleInputValueChange}
        placeholder="내용"
      />
      <br />
      <button onClick={handleSubmit}>{storedId ? "수정하기" : "등록하기"}</button>
    </div>
  );
}

export default PostForm;
