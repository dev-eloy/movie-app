import * as React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import MovieCard from './components/MovieCard';
import SearchBoxComponent from './components/SearchBox';
import DropdownFilter from './components/DropdownFilter';
import ResultsPerPageSelector from './components/ResultsPerPageSelector';
import ErrorText from './components/ErrorText';
import LoadingSpinner from './components/LoadingSpinner'; // Importa el componente LoadingSpinner
import NotFoundMessage from './components/NotFoundMessage';
import LogoSVG from './components/LogoSVG';
import '../src/sass/main.scss';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  adult: boolean;
}

const API_KEY = 'd7df51aa99f542760cf9f03be38750ef';
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const SEARCH_MOVIES_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function App() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [selectedYear, setSelectedYear] = React.useState<number | undefined>();
  const [resultsPerPage, setResultsPerPage] = React.useState<number>(20);
  const [apiError, setApiError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false); // Estado para controlar la carga

  React.useEffect(() => {
    setApiError(null);
    setIsLoading(true);

    fetch(POPULAR_MOVIES_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching popular movies');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
        setApiError('Error de la API');
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setIsLoading(true);

      fetch(POPULAR_MOVIES_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching popular movies');
          }
          return response.json();
        })
        .then(data => {
          setMovies(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching popular movies:', error);
          setApiError('Error de la API');
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);

      fetch(SEARCH_MOVIES_URL + searchTerm)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching movies');
          }
          return response.json();
        })
        .then(data => {
          setMovies(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
          setApiError('Error de la API');
          setIsLoading(false);
        });
    }
  }, [searchTerm]);

  const filteredMovies = selectedYear
    ? movies.filter(movie => new Date(movie.release_date).getFullYear() === selectedYear)
    : movies;

  const years = movies.map(movie => new Date(movie.release_date).getFullYear());
  const uniqueYears = Array.from(new Set(years));

  const startIndex = 0;
  const endIndex = resultsPerPage === -1 ? filteredMovies.length : startIndex + resultsPerPage;
  const visibleMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="container text-center">
      <LogoSVG />
        <div style={{ marginTop: '20px' }}>
          <SearchBoxComponent onChange={setSearchTerm} />
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-4 mb-3">
            <DropdownFilter years={uniqueYears} selectedYear={selectedYear} onChange={setSelectedYear} />
          </div>
          <div className="col-md-4 mb-3">
            <ResultsPerPageSelector selectedValue={resultsPerPage} onChange={setResultsPerPage} />
          </div>
        </div>

        <div className="row">
          {apiError ? (
            <ErrorText message={apiError} />
          ) : isLoading ? (
            <LoadingSpinner label="Loading..." />
          ) : visibleMovies.length === 0 ? (
            <NotFoundMessage message="No movies found." />
          ) : (
            visibleMovies.map(movie => (
              <div className="col-md-4" key={movie.id}>
                <MovieCard
                  title={movie.title}
                  release_date={movie.release_date}
                  description={movie.overview}
                  adult={movie.adult}
                  imageUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
