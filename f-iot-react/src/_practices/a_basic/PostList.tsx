import PostCard from '@/components/PostCard'
import { posts } from '@/data/posts'
import React from 'react'

function PostList() {
  return (
    <div>
      <h1>게시글 목록</h1>
      {posts.length > 0 ? (
        posts.map(post => <PostCard post={post} key={post.id} />)
      ) : (
        <p>게시글이 없습니다.</p>
      )}
    </div>
  )
}

export default PostList