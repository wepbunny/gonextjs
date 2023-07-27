import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch suggestions from the backend
  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/search?query=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Call the fetchSuggestions function on search query change
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchSuggestions(searchQuery);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

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
            list="productSuggestions"
          />
          <datalist id="productSuggestions" key={suggestions.length}>
            {suggestions.map((product) => (
              <option key={product.ID} value={product.name} />
            ))}
          </datalist>
          <button type="submit" className="bg-white text-blue-500 px-4 py-2 ml-2 rounded">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
