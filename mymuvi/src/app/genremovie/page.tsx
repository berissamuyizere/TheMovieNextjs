"use client";

import useFetchGenres from "../hooks/useFetchGenre";

const GenresPage = () => {
  const { genres, loading, error } = useFetchGenres();

  if (loading) return <div className="text-white text-center py-10">Loading genres...</div>;
  if (error) return <div className="text-red-500 text-center py-10">Error: {error}</div>;

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Genres</h2>
      <div className="flex flex-wrap gap-2 overflow-x-auto bg-gray-900 p-2">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
          >
            {genre.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GenresPage;