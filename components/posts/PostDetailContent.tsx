'use client';

import { Post } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PostDetailContentProps {
  post: Post;
}

export default function PostDetailContent({ post }: PostDetailContentProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-2">{post.title}</CardTitle>
        <CardDescription className="text-gray-500">
          작성일: {new Date(post.createdAt).toLocaleDateString('ko-KR')}
          {post.createdAt !== post.updatedAt && ` | 수정일: ${new Date(post.updatedAt).toLocaleDateString('ko-KR')}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p>{post.content}</p>
      </CardContent>
    </Card>
  );
}