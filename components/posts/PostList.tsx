'use client';

import { Post, Category } from '@/types';
import PostCard from './PostCard';

interface PostListProps {
  posts: Post[];
  categories: Category[];
}

export default function PostList({ posts, categories }: PostListProps) {
  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || '기타';
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} categoryName={getCategoryName(post.categoryId)} />
      ))}
    </div>
  );
}