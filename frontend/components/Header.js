import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            <a href="/">My Website</a>
          </h1>
        </div>
        <form onSubmit={handleSearchSubmit} className="ml-4 flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="border border-gray-400 px-4 py-2 rounded text-blue-500"
          />
          <button type="submit" className="bg-white text-blue-500 px-4 py-2 ml-2 rounded">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
