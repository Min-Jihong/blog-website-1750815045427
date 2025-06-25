'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // 실제 댓글 기능은 API 연동 및 상태 관리가 필요합니다.
  // 여기서는 UI 플레이스홀더만 제공합니다.
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>댓글</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="댓글을 작성하세요..." />
            <Button>작성</Button>
          </div>
          <div className="text-gray-500 text-sm">
            <p>아직 댓글이 없습니다.</p>
            {/* 실제 댓글 목록은 여기에 렌더링됩니다 */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}