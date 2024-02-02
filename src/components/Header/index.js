import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {
  HeaderContainerForMobile,
  ImgEl,
  UnorderedHeader,
  HeaderContainerForDesktop,
  ProfileImg,
  LogoutButtonDesktop,
  ThemeButton,
  PopupBg,
  PopupButtonContainer,
  Popupbutton,
  Menuutton,
  MenuUl,
  MenuLi,
} from './styledComponent'
import WatchContext from '../../context/WatchContext'
import './index.css'

class Header extends Component {
  state = {
    showDropdown: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  getDropdownmenu = () => (
    <MenuUl>
      <MenuLi>
        <Link to="/">Home</Link>
      </MenuLi>
      <MenuLi>
        <Link to="/trending">Trending</Link>
      </MenuLi>
      <MenuLi>
        <Link to="/gaming">Gaming</Link>
      </MenuLi>
      <MenuLi>
        <Link to="/saved-videos">Saved Videos</Link>
      </MenuLi>
    </MenuUl>
  )

  changeMenuState = () => {
    this.setState(prestate => ({showDropdown: !prestate.showDropdown}))
  }

  render() {
    const {showDropdown} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkMode, changeMode} = value
          const onChangeMode = () => {
            changeMode()
          }
          return (
            <nav>
              <HeaderContainerForMobile darkMode={darkMode}>
                <Link to="/">
                  <ImgEl
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <UnorderedHeader>
                  {darkMode ? (
                    <FiSun
                      className="header-logos light-color"
                      onClick={onChangeMode}
                    />
                  ) : (
                    <FaMoon className="header-logos" onClick={onChangeMode} />
                  )}
                  <Menuutton
                    type="button"
                    onClick={this.changeMenuState}
                    darkMode={darkMode}
                  >
                    <FaBars className="header-logos" />
                  </Menuutton>
                  <Popup
                    modal
                    trigger={
                      <FiLogOut
                        className="header-logos"
                        onClick={this.onClickLogout}
                      />
                    }
                  >
                    {close => (
                      <PopupBg>
                        <p>Are you sure, you want to logout</p>
                        <PopupButtonContainer>
                          <Popupbutton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </Popupbutton>
                          <Popupbutton
                            type="button"
                            className="trigger-button confirm"
                            onClick={() => this.onClickLogout()}
                          >
                            Confirm
                          </Popupbutton>
                        </PopupButtonContainer>
                      </PopupBg>
                    )}
                  </Popup>
                </UnorderedHeader>
              </HeaderContainerForMobile>
              {showDropdown && this.getDropdownmenu()}
              <HeaderContainerForDesktop darkMode={darkMode}>
                <ImgEl
                  src={
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <UnorderedHeader>
                  {darkMode ? (
                    <ThemeButton
                      data-testid="theme"
                      type="button"
                      onClick={onChangeMode}
                    >
                      <FiSun className="header-logos light-color" />
                    </ThemeButton>
                  ) : (
                    <ThemeButton
                      data-testid="theme"
                      type="button"
                      onClick={onChangeMode}
                    >
                      <FaMoon className="header-logos" />
                    </ThemeButton>
                  )}
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <LogoutButtonDesktop
                        type="button"
                        onClick={this.onClickLogout}
                      >
                        Logout
                      </LogoutButtonDesktop>
                    }
                  >
                    {close => (
                      <PopupBg>
                        <p>Are you sure, you want to logout</p>
                        <PopupButtonContainer>
                          <Popupbutton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </Popupbutton>
                          <Popupbutton
                            type="button"
                            className="trigger-button confirm"
                            onClick={() => this.onClickLogout()}
                          >
                            Confirm
                          </Popupbutton>
                        </PopupButtonContainer>
                      </PopupBg>
                    )}
                  </Popup>
                </UnorderedHeader>
              </HeaderContainerForDesktop>
            </nav>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default withRouter(Header)
