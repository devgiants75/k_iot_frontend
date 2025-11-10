import type { ArticleListResponseList } from '@/apis/articleApi'
import React from 'react'

interface Props {
  articles: ArticleListResponseList;
  onSelect: (id: number) => void;
}

function C_ArticleList({ articles, onSelect }: Props) {
  console.log(articles);
  return (
    <div>
      <h3>게시글 목록</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map(article => (
          <li
            key={article.id}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
            onClick={() => onSelect(article.id)}
          >
            <strong>{article.title}</strong> - {article.authorLoginId} <br />
            <small>{new Date(article.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default C_ArticleList