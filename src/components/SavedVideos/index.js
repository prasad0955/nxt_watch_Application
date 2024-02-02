import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import WatchConttext from '../../context/WatchContext'
import Header from '../Header'
import CategoryOptions from '../CategoryOptions'
import SavedVideosItem from '../SavedVideosItem'
import {
  SavedVideosBodyContainer,
  SavedSection,
  SavedHeadingContainer,
  Heading,
  SavedListContainer,
  ImgElContainer,
  NoSavedSection,
  NoVideosImg,
  NoVideosHeading,
  NoVideosPara,
  NoVideosButton,
} from './styledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <WatchConttext.Consumer>
        {value => {
          const {darkMode, savedVideosList} = value
          console.log(savedVideosList)
          return (
            <>
              <Header />
              <SavedVideosBodyContainer
                darkMode={darkMode}
                data-testid="savedVideos"
              >
                <CategoryOptions />
                {savedVideosList.length === 0 ? (
                  <NoSavedSection darkMode={darkMode}>
                    <NoVideosImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoVideosHeading darkMode={darkMode}>
                      No saved videos found
                    </NoVideosHeading>
                    <NoVideosPara darkMode={darkMode}>
                      Save your videos by clicking a button
                    </NoVideosPara>
                    <NoVideosButton>Retry</NoVideosButton>
                  </NoSavedSection>
                ) : (
                  <SavedSection>
                    <SavedHeadingContainer darkMode={darkMode}>
                      <ImgElContainer>
                        <FaFire className="trending-img-logo" />
                      </ImgElContainer>
                      <Heading>Saved Videos</Heading>
                    </SavedHeadingContainer>
                    <SavedListContainer darkMode={darkMode}>
                      {savedVideosList.map(item => (
                        <SavedVideosItem item={item} key={item.id} />
                      ))}
                    </SavedListContainer>
                  </SavedSection>
                )}
              </SavedVideosBodyContainer>
            </>
          )
        }}
      </WatchConttext.Consumer>
    )
  }
}
export default SavedVideos
