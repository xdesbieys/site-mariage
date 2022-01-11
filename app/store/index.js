import crypto from 'crypto'

export const state = () => ({
  token: null,
  isLogged: false,
  overlayShown: false,
  menuShown: false
})

export const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_LOGGED (state, isLogged) {
    state.isLogged = isLogged
  },
  SHOW_MENU (state, show) {
    state.menuShown = show
    state.overlayShown = show
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    req.session.token = crypto.randomBytes(20).toString('hex')
    commit('SET_TOKEN', req.session.token)

    if (req.session && req.session.isLogged) {
      commit('SET_LOGGED', req.session.isLogged)
    }
  },
  showMenu ({ commit }, show) {
    commit('SET_MENU', show)
  }
}
