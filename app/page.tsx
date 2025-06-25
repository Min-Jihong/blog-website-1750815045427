'use client';

import { useState, useEffect, useMemo } from 'react';
import PostList from '@/components/posts/PostList';
import SearchBar from '@/components/search/SearchBar';
import CategoryFilter from '@/components/categories/CategoryFilter';
import { Post, Category } from '@/types';
import { mockPosts, mockCategories } from '@/lib/mockData';

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setPosts(mockPosts);
    setCategories(mockCategories);
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.categoryId === selectedCategory);
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.content.toLowerCase().includes(lowerCaseQuery)
      );
    }
    return filtered;
  }, [posts, searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          onSelectCategory={handleSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <PostList posts={filteredPosts} categories={categories} />
    </>
  );
}