/**
 * 国际化语言 reducer
 */
import { addLocaleData } from 'react-intl'
import zhCN from '../languages/zh-CN'
import enUS from '../languages/en-US'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

// add local language data
addLocaleData([...en, ...zh])

const localLanguage = navigator.language || 'zh-CN'
const localMessages = {
  'zh-CN': zhCN,
  'en-US': enUS
}

// 初始化语言状态
const initState = {
  localLanguage, localMessages
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {
      console.log(2)
      return {
        localLanguage: action.payload,
        localMessages
      }
    }
    default: {
      return {
        localLanguage,
        localMessages
      }
    }
  }
}