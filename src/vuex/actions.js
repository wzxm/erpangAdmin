const increment = ({ commit, state }) => {
  commit('increment', 1)
}

const minus = ({ commit, state }) => {
  commit('minus', 1)
}

export { increment, minus }
