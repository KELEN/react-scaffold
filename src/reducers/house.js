const initState = {
  houseList: [1, 2, 3]
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_HOUSE_LIST':
      return {
        houstList: action.payload
      }
    default:
      return state
  }
}