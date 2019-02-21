export default {
  /**
   * 切换语言
   */
  changeLanguage: (val) => dispatch => {
    dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: val
    })
  }
}