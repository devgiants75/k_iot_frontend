import { type ArticleDetailResponse, getArticleById } from '@/apis/articleApi';
import React, { useEffect, useState } from 'react'

interface Props {
  articleId: number;
}

function C_ArticleDetail({ articleId }: Props) {
  const [article, setArticle] = useState<ArticleDetailResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchArticleDetail = async () => {
    try {
      setLoading(true);
      const data = await getArticleById(articleId);
      setArticle(data);
    } catch (e) {
      console.error("게시글 상세 조회 실패: ", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchArticleDetail();
  }, [articleId]);

  if (loading) return <p>불러오는 중...</p>
  if (!article) return <p>게시글 데이터를 불러올 수 없습니다.</p>

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <p>
        작성자: <strong>{article.authorLoginId}</strong>
      </p>
      <small>
        작성일: {new Date(article.createdAt).toLocaleString()}
        <br />
        수정일: {new Date(article.updatedAt).toLocaleString()}
      </small>
    </div>
  )
}

export default C_ArticleDetail