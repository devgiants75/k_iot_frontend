import type { ArticleListResponse } from '@/apis/articleApi';
import React from 'react'

interface Props {
  onSuccess: (newArticle: ArticleListResponse) => void;
}

function C_ArticleForm({ onSuccess }: Props) {
  return (
    <div>C_ArticleForm</div>
  )
}

export default C_ArticleForm