import NowPlaying from 'pages/NowPlaying';
import Upcoming from 'pages/Upcoming';
import Detail from 'pages/Detail';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
