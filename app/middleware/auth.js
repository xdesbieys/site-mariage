export default function ({ store, error }) {
  if (!store.state.isLogged) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
