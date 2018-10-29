import { instance } from './config'

export function getNearby () {
  return instance.get('/nearby')
}
