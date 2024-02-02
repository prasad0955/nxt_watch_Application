import {Link} from 'react-router-dom'

import {
  GamingListItemContainer,
  GamingImgEl,
  TTitleHeading,
  ViewCountPara,
} from './styledComponent'
import WatchContext from '../../context/WatchContext'

const GamingListItem = props => {
  const {item} = props
  return (
    <WatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <GamingListItemContainer>
            <Link to={`/videos/${item.id}`}>
              <GamingImgEl src={item.thumbnailUrl} alt="video thumbnail" />
              <TTitleHeading darkMode={darkMode}>{item.title}</TTitleHeading>
              <ViewCountPara darkMode={darkMode}>
                {`${item.viewCount} Watching Worldwide`}
              </ViewCountPara>
            </Link>
          </GamingListItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default GamingListItem
