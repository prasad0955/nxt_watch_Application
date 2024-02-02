import {Link} from 'react-router-dom'
import {
  VideoImg,
  VideoDetailsContainer,
  ProfileImg,
  VideoDescriptionContainer,
  Description,
  ViewsContainer,
  VideoViewsPara,
  ChannelNamePara,
  VideoPublishPara,
  VideoItemLi,
  Para,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

import './index.css'

const VideoItem = props => {
  const {item} = props
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <VideoItemLi darkMode={darkMode}>
            <Link to={`/videos/${item.id}`}>
              <VideoImg src={item.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImg
                  src={item.channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDescriptionContainer darkMode={darkMode}>
                  <Description darkMode={darkMode}>{item.title}</Description>
                  <ViewsContainer>
                    <ChannelNamePara darkMode={darkMode}>
                      <Para>{item.channel.name}</Para>
                    </ChannelNamePara>
                    <VideoViewsPara darkMode={darkMode}>
                      <Para>{item.viewCount}</Para>
                    </VideoViewsPara>
                    <VideoPublishPara darkMode={darkMode}>
                      <Para>{item.publishedAt}</Para>
                    </VideoPublishPara>
                  </ViewsContainer>
                </VideoDescriptionContainer>
              </VideoDetailsContainer>
            </Link>
          </VideoItemLi>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default VideoItem
