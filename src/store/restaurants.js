/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_STATE = [
  {
    id: '33843b38-1ecc-4df1-b484-187b9b5922f0',
    name: 'restaurant1',
    lat: 2,
    lon: 2,
  },
  {
    id: '58237db4-55c9-4e10-ad90-d7cf0f5333bf',
    name: 'restaurant2',
    lat: 1,
    lon: 2,
  },
]

export default {
  namespaced: true,

  state: {
    restaurants: [],
  },

  getters: {
    list: state => state.restaurants,
    get: state => id => state.restaurants.find(restaurant => restaurant.id === id),
  },

  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants
    },
    addRestaurant(state, restaurant) {
      state.restaurants.push(restaurant)
    },

    updateRestaurant(state, restaurant) {
      const idx = state.restaurants.findIndex(e => e.id === restaurant.id)
      state.restaurants[idx] = restaurant
    },
  },

  actions: {
    initialise(context) {
      context.commit('setRestaurants', DEFAULT_STATE)
    },

    add(context, restaurant) {
      const id = uuidv4()
      context.commit('addRestaurant', { ...restaurant, id })
    },

    update(context, restaurant) {
      context.commit('updateRestaurant', restaurant)
    },
  },
}
