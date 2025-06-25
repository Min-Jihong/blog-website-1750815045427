'use client';

import { Category } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CategoryFilterProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export default function CategoryFilter({ categories, onSelectCategory, selectedCategory }: CategoryFilterProps) {
  return (
    <Select onValueChange={onSelectCategory} value={selectedCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="카테고리 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">전체 카테고리</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}