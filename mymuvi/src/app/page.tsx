"use client";

import useFetchGenres from './hooks/useFetchGenre'; 
import useFetchAllMovies from './hooks/useFetchAll'; 
import Image from 'next/image';
import NavBar from './sharedComponet/NavBar'; 
import { useState, useEffect } from 'react';

const MovieLanding = () => {
  const { movies, loading: moviesLoading, error: moviesError } = useFetchAllMovies();
  const { genres, loading: genresLoading, error: genresError } = useFetchGenres();
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]); 
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedGenreId === null) {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(movie =>
        movie.genre_ids && movie.genre_ids.includes(selectedGenreId)
      ));
    }
  }, [selectedGenreId, movies]);

  if (moviesLoading || genresLoading) return <div className="text-white text-center py-10">Loading...</div>;
  if (moviesError || genresError) return <div className="text-red-500 text-center py-10">Error: {moviesError || genresError}</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <section
        className="relative w-[98vw] h-[95vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/malificent.avif')" }}
      >
        <div className="absolute bottom-10 left-0 p-4 bg-opacity-70 text-white w-full">
          <h2 className="text-4xl font-bold text-yellow-500 mb-1">Maleficent: Mistress of Evil</h2>
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <span>14</span>
            <span className="mx-2">•</span>
            <span>2019</span>
            <span className="mx-2">•</span>
            <span>1h 59m</span>
            <span className="mx-2">•</span>
            <span>1 Episodes</span>
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-tight">
            The story follows Maleficent and Aurora as they confront new <br /> challenges to their relationship, including unexpected allies and dark forces at play. <br /> Starring Angelina Jolie, Elle Fanning, Michelle Pfeiffer, Juno Temple, ...
          </p>
          <div className="flex space-x-3">
            <button className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors">
              Watch Now
            </button>
            <button className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
              Add To Favourites
            </button>
          </div>
        </div>
      </section>

      <div className="flex space-x-2 p-4 overflow-x-auto bg-gray-900">
        <button
          className="bg-yellow-500 text-black px-3 py-1 rounded-full"
          onClick={() => setSelectedGenreId(null)}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </button>
        ))}
        <span className="text-yellow-500 mt-1">›</span>
      </div>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {selectedGenreId
              ? `Movies in ${genres.find((g) => g.id === selectedGenreId)?.name || 'Selected Genre'}`
              : 'Most viewed'}
          </h2>
          <a href="#" className="text-yellow-500 hover:underline">View all ›</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-x-auto">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="relative group">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={150}
                  height={225}
                  className="w-full h-auto rounded-lg shadow-lg transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-56 bg-gray-700 rounded-lg flex items-center justify-center">
                  No poster available
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center text-white text-sm">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default MovieLanding;