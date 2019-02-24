import 'react-app-polyfill/ie9'; // This must be the first line in src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MainLayout from './containers/Layout/Layout'

import GlobalStyle from './styles/global'

import * as serviceWorker from './serviceWorker'

import { IntlProvider } from 'react-intl'

class Index extends React.Component {
  render() {
    return (
      <IntlProvider locale={ this.props.localLanguage } messages={ this.props.localMessages[this.props.localLanguage] }>
        <BrowserRouter>
          <>
            <GlobalStyle />
            <MainLayout />
          </>
        </BrowserRouter>
      </IntlProvider>
    )
  }
}

const mapStateToProps = ({ language }) => ({
  localLanguage: language.localLanguage,
  localMessages: language.localMessages
})

// connect state to container component
const IndexWrap = connect(mapStateToProps)(Index)

ReactDOM.render(
  <Provider store={ store }>
    <IndexWrap />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
