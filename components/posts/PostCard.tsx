'use client';

import Link from 'next/link';
import { Post } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  post: Post;
  categoryName: string;
}

export default function PostCard({ post, categoryName }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
          <CardDescription className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString('ko-KR')}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-700 line-clamp-3 mb-2">{post.content}</p>
          <Badge variant="secondary">{categoryName}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}