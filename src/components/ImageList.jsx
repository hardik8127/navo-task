const ImageList = ({ images, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No images found. Try searching for something!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={image.urls.small}
              alt={image.alt_description || image.description || 'Unsplash image'}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
              {image.alt_description || image.description || 'Untitled'}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              by {image.user.name}
            </p>
            <a
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
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
