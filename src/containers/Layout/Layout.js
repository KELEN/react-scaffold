import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import Home from '../Home/Home';
import Abount from '../Abount/Abount'

/**
 * app layout
 */ 
class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/abount" component={Abount} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Layout