import styled from 'styled-components'

export const VideoItemDetailsBodyContainer = styled.div`
  height: 91vh;
  width: 100%;
  background-color: #e2e8f0;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const VideoDetailContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  overflow: auto;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const TitlePara = styled.p``
export const ViewsContainerUl = styled.ul`
  display: flex;
  padding: 0px;
  align-items: center;
`
export const ViewsListItem = styled.p`
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin-right: 30px;
`
export const PudlishListItem = styled.p``
export const LikeLOgosUl = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
`
export const ListItem = styled.li`
  margin-right: 15px;
`
export const LikeButtonInConatiner = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const DislikeButtonInConatiner = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`
export const SaveButtonInConatiner = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`
export const LikePara = styled.p`
  padding: 0px;
  margin: 0px;
  margin-left: 10px;
`
export const LikeButton = styled.button`
  padding: 4px;
  border: none;
  background-color: transparent;
`
export const DescriptionContainer = styled.div`
  padding: 10px;
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`
export const SubScribersContainer = styled.div`
  padding: 5px;
`
export const DesktopViewsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const SubscribersPara = styled.p`
  padding: 0px;
  margin: 0px;
  margin-bottom: 5px;
`
export const NamePara = styled.p`
  padding: 0px;
  margin: 0px;
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
