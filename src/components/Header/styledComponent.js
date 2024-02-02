import styled from 'styled-components'

export const HeaderContainerForMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  height: 9vh;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderContainerForDesktop = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    display: flex;
    height: 9vh;
  }
`
export const ImgEl = styled.img`
  width: 100px;
`
export const UnorderedHeader = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 35px;
  margin-right: 15px;
`
export const LogoutButtonDesktop = styled.button`
  padding: 8px;
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  font-weight: 600;
`
export const ThemeButton = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
`
export const PopupBg = styled.div`
  background-color: #1e293b;
  padding: 20px;
  color: #ffffff;
  border-radius: 15px;
`
export const PopupButtonContainer = styled.div`
  display: flex;
  jsutify-content: space-between;
`
export const Popupbutton = styled.button`
  padding: 10px;
  margin: auto;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
`
export const Menuutton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const MenuUl = styled.ul`
  list-type: none;
  padding: 0px;
`
export const MenuLi = styled.li`
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
`
