'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Home className="h-6 w-6" />
        <h1 className="text-xl font-bold">블로그</h1>
      </Link>
    </header>
  );
}