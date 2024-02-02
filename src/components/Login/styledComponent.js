import styled from 'styled-components'

export const LabelEl = styled.label`
  margin-bottom: 5px;
  font-family: 'Roboto';
  color: #616e7c;
  font-weight: 500;
`
export const InputEl = styled.input`
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  color: #616e7c;
`
export const LoginBgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
`
export const LoginDetailContainer = styled.form`
  padding: 20px;
  box-shadow: 0px 0px 5px 5px
    ${props => (props.darkMode ? '#0f0f0f' : '#f4f4f4')};
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 60px;
    padding-bottom: 80px;
  }
`
export const ImageEl = styled.img`
  width: 150px;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 40px;
`
export const LoginButton = styled.button`
  padding: 12px;
  padding-left: 20px;
  padding-right: 20px;
  color: #ffffff;
  border: none;
  background-color: #4f46e5;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  padding: 0px;
  margin: 0px;
  color: #ff0000;
`
export const CheckBoxContainer = styled.div`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  margin-bottom: 5px;
`
