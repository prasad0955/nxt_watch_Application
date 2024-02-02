import styled from 'styled-components'

export const VideoItemLi = styled.li`
  padding: 0px;
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    width: 48%;
    margin-right: 2%;
    margin-bottom: 2%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
    margin-right: 1%;
    margin-bottom: 2%;
  }
`
export const VideoImg = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  padding: 10px;
  display: flex;
  font-family: 'Roboto';
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const ProfileImg = styled.img`
  padding: 0px;
  width: 40px;
  height: 40px;
  margin-right: 2px;
`
export const VideoDescriptionContainer = styled.div`
  padding: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const Description = styled.p`
  padding: 0px;
  margin: 0px;
  color: #424242;
  font-weight: 500;
  line-hight: 1.5;
  gap: 50px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
export const ViewsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #64748b;
  margin: 0px;
  padding: 5px;
  padding-left: 0px;
  font-weight: 500;
  flex-wrap: wrap;
`
export const VideoViewsPara = styled.li`
  margin-right: 25px;
  list-style-type: disc;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    list-style: none;
    font-size: 14px;
  }
`
export const ChannelNamePara = styled.li`
  list-style: none;
  padding: 0px;
  margin: 0px;
  margin-right: 25px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    width: 100%;
    margin-bottom: 6px;
    font-size: 16px;
  }
`
export const VideoPublishPara = styled.li`
  padding: 0px;
  margin: 0px;
  margin-right: 25px;
  list-style-type: disc;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`
export const Para = styled.p`
  padding: 0px;
  margin: 0px;
`
