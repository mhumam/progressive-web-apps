import Services from 'services';
import { MovieItemCard } from 'components/MovieCard';

const NowPlaying = {
    async render() {
        return `
        <div class="content">
          <h2 class="content__heading">Now Playing in Cinema</h2>
          <div id="movies" class="movies">
  
          </div>
        </div>
      `;
    },

    async afterRender() {
        const movies = await Services.nowPlayingMovies();
        const moviesContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += MovieItemCard(movie);
        });
    },

}

export default NowPlaying;