import styled from 'styled-components'

export const BodyContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkMode ? '#181818 ' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  height: 91vh;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const HomeBodyMobileView = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
`
export const PremiumSection = styled.div`
  padding: 20px;
  max-height: 30%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (min-width: 576px) {
    padding: 15px;
  }
`
export const PremiumImgEl = styled.img`
  width: 120px;
  @media screen and (min-width: 576px) {
    width: 150px;
  }
`
export const RemoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const RemoveButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: ponter;
`
export const PremiumText = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: #424242;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    font-size: 20px;
    margin-top: 6px;
    margin-bottom: 5px;
  }
`
export const GetItNowButton = styled.button`
  padding: 5px;
  font-size: 14px;
  color: #181818;
  background-color: transparent;
  font-weight: 600;
  margin-top: 5px;
  @media screen and (min-width: 576px) {
    padding: 8px;
    font-size: 18px;
  }
`
export const SearchBarContainer = styled.div`
  padding: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 450px;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  @media screen and (min-width: 576px) {
    padding: 12px;
    font-size: 14px;
  }
`
export const SearchInputEl = styled.input`
  padding: 10px;
  width: 80%;
  border: 2px solid #cccccc;
`
export const SearchButtonEle = styled.button`
  padding: 8px;
  width: 20%;
  background-color: #f4f4f4;
  border: 2px solid #cccccc;
  max-height: 10%;
`
export const VideoSectionContainer = styled.div`
  padding: 0px;
  overflow: auto;
  min-height: 63%;
  max-height: 90%;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
`
export const VideoUlContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  @media screen and (min-width: 576px) {
    padding: 14px;
  }
`
export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RetryButton = styled.button`
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
`
export const NoVideoPara = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const LoadingContainer = styled.div`
  min-height: 63%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
