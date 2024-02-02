import styled from 'styled-components'

export const SavedVideosBodyContainer = styled.div`
  height: 90vh;
  display: flex;
  width: 100vw;
  background-color: ${props => (props.darkMode ? '#181818' : '#f4f4f4')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const SavedSection = styled.div`
  margin: 0px;
  width: 100%;
`
export const SavedHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15%;
  padding-left: 30px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const Heading = styled.h1`
  margin: 0px;
`
export const SavedListContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  height: 85%;
  overflow: auto;
  background-color: ${props => (props.darkMode ? '#000000' : 'ffffff')};
  @media screen and (min-width: 576px) {
    padding: 25px;
  }
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`
export const ImgElContainer = styled.div`
  background-color: #e2e8f0;
  padding: 10px;
  border-radius: 24px;
  margin-right: 20px;
`
export const NoSavedSection = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const NoVideosImg = styled.img`
  width: 150px;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const NoVideosButton = styled.button`
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
export const NoVideosHeading = styled.h1`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-align: center;
`
export const NoVideosPara = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  text-align: center;
`
