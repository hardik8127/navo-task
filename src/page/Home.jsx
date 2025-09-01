import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import { searchImages } from "../services/unsplashApi";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchImages(searchTerm);
      setImages(data.results);
    } catch (err) {
      setError(
        "Failed to fetch images. Please check your API key and try again."
      );
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6 sm:mb-8 px-2">
          Image Search App
        </h1>

        <SearchBar onSearch={handleSearch} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-3 rounded mb-4 sm:mb-6 mx-2 sm:mx-0 text-sm sm:text-base">
            {error}
          </div>
        )}

        <ImageList images={images} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
