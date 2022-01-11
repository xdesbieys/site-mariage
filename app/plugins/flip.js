import Tick from '@pqina/flip'

export default ({ app }, inject) => {
  inject('tick', Tick)
}
