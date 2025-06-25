import { Post, Category } from "@/types";

export const mockCategories: Category[] = [
  { id: "1", name: "기술" },
  { id: "2", name: "일상" },
  { id: "3", name: "여행" },
  { id: "4", name: "음식" }
];

export const mockPosts: Post[] = [
  {
    id: "post-1",
    title: "Next.js 15 새로운 기능 탐구",
    content: "Next.js 15의 최신 기능들을 자세히 알아봅니다. 서버 컴포넌트, 액션 등...",
    categoryId: "1",
    createdAt: "2023-01-15T10:00:00Z",
    updatedAt: "2023-01-15T10:00:00Z"
  },
  {
    id: "post-2",
    title: "주말에 떠난 제주도 여행기",
    content: "아름다운 제주도의 풍경과 맛집을 소개합니다. 성산일출봉, 섭지코지...",
    categoryId: "3",
    createdAt: "2023-02-20T14:30:00Z",
    updatedAt: "2023-02-20T14:30:00Z"
  },
  {
    id: "post-3",
    title: "집에서 만드는 쉬운 파스타 레시피",
    content: "간단한 재료로 만들 수 있는 맛있는 파스타 레시피를 공유합니다. 봉골레, 알리오 올리오...",
    categoryId: "4",
    createdAt: "2023-03-05T09:15:00Z",
    updatedAt: "2023-03-05T09:15:00Z"
  },
  {
    id: "post-4",
    title: "TypeScript 심화 학습 가이드",
    content: "TypeScript의 고급 기능과 패턴을 학습하여 더 견고한 코드를 작성하세요.",
    categoryId: "1",
    createdAt: "2023-04-10T11:00:00Z",
    updatedAt: "2023-04-10T11:00:00Z"
  },
  {
    id: "post-5",
    title: "일상 속 작은 행복 찾기",
    content: "바쁜 일상 속에서 소소한 행복을 발견하는 방법들. 산책, 독서, 커피 한 잔...",
    categoryId: "2",
    createdAt: "2023-05-01T16:00:00Z",
    updatedAt: "2023-05-01T16:00:00Z"
  }
];