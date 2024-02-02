import styled from 'styled-components'

export const BodyContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  height: 91vh;
  display: flex;
`
export const FailureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FailureImg = styled.img`
  width: 250px;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 500;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #4f46e5;
  color: #ffffff;
`
export const FailureHeading = styled.h1`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-align: center;
`
export const FailurePara = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-align: center;
`
