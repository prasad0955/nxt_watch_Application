import {Link} from 'react-router-dom'
import {
  ListItem,
  ThumpnailImg,
  VideoDescriptionContainer,
  ProfileImg,
  VideoDetailsContainer,
  ViewsContainer,
  TitleHeading,
  Para1,
  Para2,
  Para3,
} from './styledComponent'

import WatchContext from '../../context/WatchContext'

const SavedVideosItem = props => {
  const {item} = props
  const {channel} = item
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <li>
            <Link to={`/videos/${item.id}`}>
              <ListItem>
                <ThumpnailImg src={item.thumbnailUrl} alt="video thumbnail" />
                <VideoDescriptionContainer>
                  <ProfileImg
                    src={channel.profileImageUrl}
                    alt="video thumbnail"
                  />
                  <VideoDetailsContainer>
                    <TitleHeading darkMode={darkMode}>
                      {item.title}
                    </TitleHeading>
                    <ViewsContainer darkMode={darkMode}>
                      <Para1>{channel.name}</Para1>
                      <Para2>{item.viewCount}</Para2>
                      <Para3>{item.publishedAt}</Para3>
                    </ViewsContainer>
                  </VideoDetailsContainer>
                </VideoDescriptionContainer>
              </ListItem>
            </Link>
          </li>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default SavedVideosItem
