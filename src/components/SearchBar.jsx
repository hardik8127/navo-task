import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for images..."
          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 text-sm sm:text-base min-w-0"
        />
        <button
          type="submit"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm sm:text-base font-medium whitespace-nowrap"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
