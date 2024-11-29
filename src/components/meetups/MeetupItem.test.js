/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount } from 'enzyme';
import React from 'react';
import { FavoritesContext } from '../../contexts';
import MeetupItem from './MeetupItem';

// Mock data for a meetup item
const meetup = {
  id: 'm1',
  title: 'Test Meetup',
  image: 'test.jpg',
  address: '123 Test St',
  description: 'This is a test meetup.'
};

/**
 * Helper function to create a mounted wrapper with necessary context.
 * @param {Array} favorites - Array of favorite meetups.
 * @param {Object} item - The meetup item to render.
 * @returns {ReactWrapper}
 */
const setup = (favorites = [], item = meetup) => {
  const mockContext = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    itemIsFavorite: jest
      .fn()
      .mockImplementation((id) => favorites.some((fav) => fav.id === id))
  };

  return mount(
    <FavoritesContext.Provider value={mockContext}>
      <MeetupItem item={item} />
    </FavoritesContext.Provider>
  );
};

describe('MeetupItem Component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test('renders meetup details correctly', () => {
    const wrapper = setup();
    expect(wrapper.find('h3').text()).toBe(meetup.title);
    expect(wrapper.find('address').text()).toBe(meetup.address);
    expect(wrapper.find('p').text()).toBe(meetup.description);
    expect(wrapper.find('img').prop('src')).toBe(meetup.image);
    expect(wrapper.find('img').prop('alt')).toBe(meetup.title);
  });

  test('displays "Add to Favorites" when item is not favorite', () => {
    const wrapper = setup();
    const button = wrapper.find('button');
    expect(button.text()).toBe('Add to Favorites');
  });

  test('displays "Remove from Favorites" when item is favorite', () => {
    const wrapper = setup([meetup]); // Item is in favorites
    const button = wrapper.find('button');
    expect(button.text()).toBe('Remove from Favorites');
  });

  test('calls addFavorite when "Add to Favorites" button is clicked', () => {
    const mockAddFavorite = jest.fn();
    const mockContext = {
      favorites: [],
      totalFavorites: 0,
      addFavorite: mockAddFavorite,
      removeFavorite: jest.fn(),
      itemIsFavorite: jest.fn().mockReturnValue(false)
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={mockContext}>
        <MeetupItem item={meetup} />
      </FavoritesContext.Provider>
    );

    wrapper.find('button').simulate('click');
    expect(mockAddFavorite).toHaveBeenCalledWith(meetup);
  });

  test('calls removeFavorite when "Remove from Favorites" button is clicked', () => {
    const mockRemoveFavorite = jest.fn();
    const mockContext = {
      favorites: [meetup],
      totalFavorites: 1,
      addFavorite: jest.fn(),
      removeFavorite: mockRemoveFavorite,
      itemIsFavorite: jest.fn().mockReturnValue(true)
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={mockContext}>
        <MeetupItem item={meetup} />
      </FavoritesContext.Provider>
    );

    wrapper.find('button').simulate('click');
    expect(mockRemoveFavorite).toHaveBeenCalledWith(meetup.id);
  });
});
