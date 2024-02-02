import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 0px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const ThumpnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 60%;
    max-width: 600px;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    padding: 10px;
  }
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 45px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  padding: 6px;
`
export const ViewsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
  list-style-type: disc;
  flex-wrap: wrap;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const TitleHeading = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 22px;
    margin-bottom: 5px;
  }
`
export const Para2 = styled.p`
  padding: 0px;
  margin: 0px;
  margin-right: 25px;
  margin-top: 3px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    list-style: none;
    margin-bottom: 5px;
  }
`
export const Para3 = styled.p`
  padding: 0px;
  margin: 0px;
  margin-right: 25px;
  margin-top: 3px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const Para1 = styled.p`
  padding: 0px;
  margin: 0px;
  list-style: none;
  margin-right: 25px;
  margin-top: 3px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    width: 100%;
  }
`
