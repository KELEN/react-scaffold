import language from './language'

export const getData = () => dispatch => {
  dispatch({
    type: 'GET_HOUSE_LIST',
    payload: [1, 2, 3]
  })
}

export default {
  ...language
}