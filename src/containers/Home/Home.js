import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 80px;
  height: 30px;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: #efefef;
  ${ props => props.primary && css `
    background: #38a9d5;
    color: white;
  `} 
`

class Home extends Component {
  render() {
    return (
      <Container className="yzw-container">
        <FormattedMessage id="intl.intlLanguageLabel" />: <FormattedMessage id="intl.HOME" />
        <Row>
          <Col sm={8}>
            <Button>Hello</Button>
          </Col>
          <Col sm={4}>
            <Button primary>World</Button>
          </Col>
        </Row>
        <header className="App-header">
          { this.props.houseList }
        </header>
      </Container>
    );
  }
}

const mapStateToProps = ({ house }) => ({
  houseList: house.houseList
})

export default connect(
  mapStateToProps
)(Home)
