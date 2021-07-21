import Services from 'services';
import UrlParser from 'routes/url-parser';
import { MovieDetailCard } from 'components/MovieCard';

const Detail = {
    async render() {
        return `
        <div id="movie" class="movie"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await Services.detailMovie(url.id);
        const movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = MovieDetailCard(movie);
    },
}

export default Detail;