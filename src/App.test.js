/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/layout/Layout';
import { FavoritesContextProvider, MeetupsContextProvider } from './contexts';

/**
 * Helper function to create a shallow wrapper for the App component.
 * @returns {ShallowWrapper}
 */
const setupShallow = () => shallow(<App />);

/**
 * Helper function to create a mounted wrapper for the App component with necessary providers.
 * @returns {ReactWrapper}
 */
const setupMount = () =>
  mount(
    <BrowserRouter>
      <MeetupsContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </MeetupsContextProvider>
    </BrowserRouter>
  );

/**
 * Helper function to find elements by data-test attribute.
 * @param {ShallowWrapper|ReactWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper|ReactWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe('App Component', () => {
  test('renders App without crashing', () => {
    const wrapper = setupShallow();
    expect(wrapper.exists()).toBe(true);
  });

  test('renders the Layout component', () => {
    const wrapper = setupShallow();
    expect(wrapper.find(Layout).length).toBe(1);
  });

  test('contains the main app div', () => {
    const wrapper = setupShallow();
    const appDiv = findByTestAttr(wrapper, 'app');
    expect(appDiv.length).toBe(1);
  });

  test('renders Routes component', () => {
    const wrapper = setupShallow();
    expect(wrapper.find('Routes').length).toBe(1);
  });

  test('navigates to AllMeetupsPage by default', () => {
    const wrapper = setupMount();
    expect(wrapper.find('AllMeetupsPage').length).toBe(1);
  });
});
