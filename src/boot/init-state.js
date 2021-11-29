export default async ({
  store,
}) => {
  try {
    await Promise.all(
      [
        store.dispatch('restaurants/initialise'),
        store.dispatch('ratings/initialise'),
      ],
    )

    store.commit('app/setAppState', { appState: 'ready' })
  } catch (e) {
    store.commit('app/setAppState', {
      appState: 'error',
      details: `initialising the database failed. Error message: ${e.message}`,
    })

    console.error(`initialising the database failed. Error message: ${e.message}`)
  }
}
