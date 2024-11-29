import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from './pages';

function App() {
  return (
    <div data-test="app">
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
