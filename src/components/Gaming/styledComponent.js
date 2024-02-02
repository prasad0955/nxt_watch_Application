import styled from 'styled-components'

export const GamingBodyContainer = styled.div`
  height: 91vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const GamingListContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f4f4f4')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const GamingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 15%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const GamingImg = styled.img``
export const GaingHeading = styled.h1`
  padding: 0px;
`
export const ImgElContainer = styled.div`
  background-color: #e2e8f0;
  padding: 10px;
  border-radius: 24px;
  margin-right: 20px;
`
export const GamingUlContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  height: 85%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
export const LoadingContainer = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
`
export const FailureImg = styled.img`
  width: 150px;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const FailureContainer = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
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
