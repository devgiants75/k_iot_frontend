import React, { useEffect, useState } from 'react'
import { mockApi } from './B_Axios';
import type { Post } from './Post';

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    //@ GET
    const response = await mockApi.get("/posts?_limit=5");
    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  //^ === Event Handler ===
  const handleEdit = (id: number) => {
    localStorage.setItem('editingPostId', String(id));
  }

  const handleDelete = async (id: number) => {
    await mockApi.delete(`/posts/${id}`);
    alert('삭제 완료');
    fetchPosts();
  }

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            {/* post.id 값의 타입 단언! (Post 인터페이스 내부에서 옵셔널) */}
            <button onClick={() => handleEdit(post.id!)}>수정</button>
            <button onClick={() => handleDelete(post.id!)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList