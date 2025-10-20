import React, { useState, useEffect } from 'react';

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1510414902-5c742302bb6c?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      comment: 'Sunset at the beach in Thailand!' 
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1549247719-7243c7b396b1?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      comment: 'Hiking in the Swiss Alps, breathtaking views.' 
    },
  ]);
  
  const [newPhotoFile, setNewPhotoFile] = useState(null); 
  const [newPhotoComment, setNewPhotoComment] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Clean up local object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      photos.forEach(photo => {
        if (photo.url.startsWith('blob:')) {
          URL.revokeObjectURL(photo.url);
        }
      });
    };
  }, [photos]);

  const handleUploadPhoto = (e) => {
    e.preventDefault();
    if (newPhotoFile) {
      setLoading(true);

      // --- SIMULATED UPLOAD ---
      const localUrl = URL.createObjectURL(newPhotoFile);
      
      setPhotos([...photos, { 
        id: Date.now(), 
        url: localUrl, 
        comment: newPhotoComment 
      }]);

      setNewPhotoFile(null);
      setNewPhotoComment('');
      
      e.target.reset(); 
      setLoading(false);
    }
  };

  const handleDeletePhoto = (id) => {
    const photoToDelete = photos.find(photo => photo.id === id);
    
    if (photoToDelete && photoToDelete.url.startsWith('blob:')) {
      URL.revokeObjectURL(photoToDelete.url);
    }
    
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-[calc(100vh-60px)]">
      <h1 className="text-4xl font-extrabold text-teal-700 mb-6 text-center">Your Photo Gallery</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Relive your cherished memories and add new ones!
      </p>

      {/* Upload Photo Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload a New Photo</h2>
        
        <form onSubmit={handleUploadPhoto} className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => setNewPhotoFile(e.target.files[0])}
            required
          />
          <textarea
            placeholder="Add a comment about this photo..."
            className="border p-3 rounded-lg focus:ring-teal-500 focus:border-teal-500 h-24 resize-none"
            value={newPhotoComment}
            onChange={(e) => setNewPhotoComment(e.target.value)}
          ></textarea>
          
          <button
            type="submit"
            disabled={!newPhotoFile || loading}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md self-start disabled:bg-teal-300"
          >
            {loading ? 'Processing...' : 'Upload Photo'}
          </button>
        </form>
      </div>

      {/* Display Photos */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Memories</h2>
        {photos.length === 0 ? (
          <p className="text-gray-500">No photos in your gallery yet. Start uploading!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <img 
                  src={photo.url} 
                  alt={photo.comment || "Travel memory"}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-2 italic">
                    {photo.comment ? `"${photo.comment}"` : "No comment"}
                  </p> {/* <-- THIS IS THE FIX (was </s_p>) */}
                  <button 
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-medium"
                  >
                    Delete Photo
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}