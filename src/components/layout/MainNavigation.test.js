/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {
  FavoritesContextProvider,
  MeetupsContextProvider
} from './../../contexts';
import App from './../../App';

test('renders NewMeetupsPage when navigated to /new-meetup', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/new-meetup']}>
      <MeetupsContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </MeetupsContextProvider>
    </MemoryRouter>
  );

  expect(wrapper.find('NewMeetupsPage').length).toBe(1);
});

test('renders FavoritesPage when navigated to /favorites', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/favorites']}>
      <MeetupsContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </MeetupsContextProvider>
    </MemoryRouter>
  );

  expect(wrapper.find('FavoritesPage').length).toBe(1);
});
