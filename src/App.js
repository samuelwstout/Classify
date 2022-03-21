import { Login } from './Login';
import { Dashboard } from './Dashboard';
import TrackAlbumResult from './TrackAlbumResult';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div>
      {code ? <Dashboard code={code} /> : <Login />}
      <TrackAlbumResult code={code} />
    </div>
  );
}

export default App;
