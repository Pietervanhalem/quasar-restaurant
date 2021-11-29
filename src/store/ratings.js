/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_STATE = [
  {
    id: '4a64f1d6-db29-4993-95b6-cc7791d43560',
    restaurantId: '33843b38-1ecc-4df1-b484-187b9b5922f0',
    rating: 4,
    ratedBy: 'Pieter',
  },
  {
    id: 'fef37717-f1f7-4f26-b856-c071c53508db',
    restaurantId: '33843b38-1ecc-4df1-b484-187b9b5922f0',
    rating: 5,
    ratedBy: 'Millicent',
  },
  {
    id: 'f91f2239-eeeb-4f89-8224-162a1195bca5',
    restaurantId: '58237db4-55c9-4e10-ad90-d7cf0f5333bf',
    rating: 2,
    ratedBy: 'Millicent',
  },
]

export default {
  namespaced: true,

  state: {
    ratings: [],
  },

  getters: {
    get: state => id => state.ratings.find(rating => rating.id === id),

    restaurantRatings: (state) => (id) => state.ratings
      .filter(rating => rating.restaurantId === id),
  },

  mutations: {
    setRatings(state, ratings) {
      state.ratings = ratings
    },

    addRating(state, rating) {
      state.ratings.push(rating)
    },

    updateRating(state, rating) {
      const idx = state.ratings.findIndex(e => e.id === rating.id)
      state.ratings[idx] = rating
    },
  },

  actions: {
    initialise(context) {
      context.commit('setRatings', DEFAULT_STATE)
    },

    add(context, rating) {
      const id = uuidv4()
      context.commit('addRating', { ...rating, id })
    },

    update(context, rating) {
      context.commit('updateRating', rating)
    },
  },
}
