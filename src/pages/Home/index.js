import { Link } from 'react-router-dom';

import { category, movieType, tvType } from '@/api/movieApi';
import { Hero, Button, MovieList } from '@/components';

function Home() {
  return (
    <div>
      <Hero />

      <div className="container">
        <section className="section">
          <div className="section__header">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <Button outline small>
                View more
              </Button>
            </Link>
          </div>

          <MovieList category={category.movie} type={movieType.popular} />
        </section>

        <section className="section">
          <div className="section__header">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <Button outline small>
                View more
              </Button>
            </Link>
          </div>

          <MovieList category={category.movie} type={movieType.top_rated} />
        </section>

        <section className="section">
          <div className="section__header">
            <h2>Trending TV</h2>
            <Link to="/movie">
              <Button outline small>
                View more
              </Button>
            </Link>
          </div>

          <MovieList category={category.tv} type={tvType.popular} />
        </section>

        <section className="section">
          <div className="section__header">
            <h2>Top Rated TV</h2>
            <Link to="/movie">
              <Button outline small>
                View more
              </Button>
            </Link>
          </div>

          <MovieList category={category.tv} type={tvType.top_rated} />
        </section>
      </div>
    </div>
  );
}

export default Home;
