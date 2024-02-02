import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import WatchContext from '../../context/WatchContext'
import {
  LabelEl,
  InputEl,
  LoginBgContainer,
  LoginDetailContainer,
  ImageEl,
  LoginButton,
  ErrorPara,
  CheckBoxContainer,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isSuccess: true,
    error: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    this.setState({isSuccess: true})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({error, isSuccess: false})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userObj = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }
    const response = await fetch(url, option)
    const fetchData = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(fetchData.jwt_token)
    } else {
      this.onSubmitFailure(fetchData.error_msg)
    }
  }

  onChangePasswordType = event => {
    console.log(event.target.checked)
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {username, password, isSuccess, error, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <LoginBgContainer darkMode={darkMode}>
              <LoginDetailContainer
                darkMode={darkMode}
                onSubmit={this.onSubmitForm}
              >
                <ImageEl
                  src={`${
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }`}
                  alt="website logo"
                />
                <LabelEl htmlFor="username">USERNAME</LabelEl>
                <InputEl
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  value={username}
                  id="username"
                />
                <LabelEl htmlFor="password">PASSWORD</LabelEl>
                <InputEl
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  value={password}
                  id="password"
                />
                <CheckBoxContainer darkMode={darkMode}>
                  <input
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onChangePasswordType}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {!isSuccess && <ErrorPara>{error}</ErrorPara>}
              </LoginDetailContainer>
            </LoginBgContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Login
