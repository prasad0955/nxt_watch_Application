import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import {
  TrendingBodyContainer,
  TrendingSection,
  TrendHeadingContainer,
  TrendingListContainer,
  Heading,
  ImgElContainer,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponent'
import WatchConttext from '../../context/WatchContext'
import Header from '../Header'
import CategoryOptions from '../CategoryOptions'
import TrendindVideoItem from '../TrendindVideoItem'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {
    videosList: [],
  }

  componentDidMount() {
    this.fetchTrendingList()
  }

  fetchTrendingList = async () => {
    this.setState({currentStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchData = await response.json()
    if (response.ok) {
      const {videos} = fetchData
      const videosList = videos.map(item => ({
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({videosList, currentStatus: status.success})
    } else {
      this.setState({currentStatus: status.failure})
    }
  }

  getVideosList = () => {
    const {videosList} = this.state
    return videosList.map(item => (
      <TrendindVideoItem item={item} key={item.id} />
    ))
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
    this.fetchTrendingList()
  }

  getFailureView = darkMode => (
    <FailureContainer>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureHeading darkMode={darkMode}>
        Oops! Something went wrong
      </FailureHeading>
      <FailurePara darkMode={darkMode}>We are having some trouble</FailurePara>
      <FailureButton onClick={this.retry}>Retry</FailureButton>
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
      <WatchConttext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <TrendingBodyContainer>
                <CategoryOptions />
                <TrendingSection data-testid="trending" darkMode={darkMode}>
                  <TrendHeadingContainer darkMode={darkMode}>
                    <ImgElContainer>
                      <FaFire className="trending-img-logo" />
                    </ImgElContainer>
                    <Heading>Trending</Heading>
                  </TrendHeadingContainer>
                  <TrendingListContainer darkMode={darkMode}>
                    {this.getVideos(darkMode)}
                  </TrendingListContainer>
                </TrendingSection>
              </TrendingBodyContainer>
            </>
          )
        }}
      </WatchConttext.Consumer>
    )
  }
}
export default Trending
