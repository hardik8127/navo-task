const ImageList = ({ images, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 sm:py-12">
        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 px-4">
        <p className="text-gray-500 text-base sm:text-lg">No images found. Try searching for something!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
      {images.map((image) => (
        <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="relative w-full">
            <img
              src={image.urls.small}
              alt={image.alt_description || image.description || 'Unsplash image'}
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-2 sm:p-3 md:p-4">
            <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base line-clamp-2 leading-tight">
              {image.alt_description || image.description || 'Untitled'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 truncate">
              by {image.user.name}
            </p>
            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-blue-500 text-white text-xs sm:text-sm rounded hover:bg-blue-600 transition-colors"
            >
              View on Unsplash
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
