import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingBodyContainer,
  GamingListContainer,
  GamingHeadingContainer,
  GaingHeading,
  ImgElContainer,
  GamingUlContainer,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponent'

import Header from '../Header'
import CategoryOptions from '../CategoryOptions'
import GamingListItem from '../GamingListItem'
import WatchContext from '../../context/WatchContext'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    currentStatus: status.loading,
  }

  componentDidMount() {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    this.setState({currentStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Beatrer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchData = await response.json()
    if (response.ok) {
      const {videos} = fetchData
      const gamingVideosList = videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({gamingVideosList, currentStatus: status.success})
    } else {
      this.setState({currentStatus: status.failure})
    }
  }

  getVideosList = darkMode => {
    const {gamingVideosList} = this.state
    return (
      <GamingUlContainer darkMode={darkMode}>
        {gamingVideosList.map(item => (
          <GamingListItem item={item} key={item.id} />
        ))}
      </GamingUlContainer>
    )
  }

  getLoading = darkMode => (
    <LoadingContainer
      darkMode={darkMode}
      className="loader-container"
      data-testid="loader"
    >
      <Loader
        type="ThreeDots"
        color={darkMode ? '#ffffff' : '000000'}
        height="50"
        width="50"
      />
    </LoadingContainer>
  )

  retry = () => {
    this.fetchGamingVideos()
  }

  getFailureView = darkMode => (
    <FailureContainer darkMode={darkMode}>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureHeading darkMode={darkMode}>
        Oops! Something went wrong
      </FailureHeading>
      <FailurePara darkMode={darkMode}>We are having some trouble</FailurePara>
      <FailureButton type="button" onClick={this.retry}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  getVideos = darkMode => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case status.loading:
        return this.getLoading(darkMode)
      case status.success:
        return this.getVideosList(darkMode)
      case status.failure:
        return this.getFailureView(darkMode)
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <GamingBodyContainer>
                <CategoryOptions />
                <GamingListContainer darkMode={darkMode} data-testid="gaming">
                  <GamingHeadingContainer darkMode={darkMode}>
                    <ImgElContainer>
                      <SiYoutubegaming className="gaming-logo" />
                    </ImgElContainer>
                    <GaingHeading>Gaming</GaingHeading>
                  </GamingHeadingContainer>
                  {this.getVideos(darkMode)}
                </GamingListContainer>
              </GamingBodyContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Gaming
