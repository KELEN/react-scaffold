import React from 'react'
import HeaderLink from './HeaderLink'
import { connect } from 'react-redux'
import actions from '../../actions'

class Header extends React.Component {
  render() {
    return (
      <div className="yzw-header">
        <h1>Header</h1>
        <span> current language: { this.props.language } </span>
        <button onClick={ () => this.props.changeLanguage(this.props.language === 'zh-CN' ? 'en-US' : 'zh-CN') }>change language</button>
        <nav className="yzw-menu">
          <HeaderLink to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/abount">
            Abount
          </HeaderLink>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  language: state.language.localLanguage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeLanguage: (val) => dispatch(actions.changeLanguage(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

// export default connect({
//   mapDispatchToProps
// })(Header)