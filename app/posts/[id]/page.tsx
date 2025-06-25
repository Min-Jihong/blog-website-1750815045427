'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PostDetailContent from '@/components/posts/PostDetailContent';
import { Post } from '@/types';
import { mockPosts } from '@/lib/mockData';

export default function PostDetailPage() {
  const params = useParams();
  const postId = params.id as string;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const foundPost = mockPosts.find(p => p.id === postId);
    setPost(foundPost || null);
  }, [postId]);

  if (!post) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>글을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      <PostDetailContent post={post} />
    </>
  );
}