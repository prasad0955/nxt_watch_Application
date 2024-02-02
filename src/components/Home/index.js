import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaSearch} from 'react-icons/fa'
import {
  HomeBodyMobileView,
  PremiumImgEl,
  PremiumText,
  PremiumSection,
  GetItNowButton,
  SearchBarContainer,
  SearchInputEl,
  SearchButtonEle,
  VideoSectionContainer,
  VideoUlContainer,
  BodyContainer,
  RemoveContainer,
  RemoveButton,
  NoVideosImg,
  NoVideosContainer,
  RetryButton,
  NoVideosHeading,
  NoVideoPara,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponent'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import VideoItem from '../VideoItem'
import CategoryOptions from '../CategoryOptions'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    videosList: [],
    searchValue: '',
    displayPrimiumSection: true,
    currentStatus: status.loading,
  }

  componentDidMount() {
    this.fetchSearchListItems()
  }

  onDeletePrimeSection = () => {
    this.srtState({displayPrimiumSection: false})
  }

  fetchSearchListItems = async () => {
    this.setState({currentStatus: status.loading})
    const {searchValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
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

  onClickSearch = () => {
    this.fetchSearchListItems()
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  getVideoItems = () => {
    const {videosList} = this.state
    return (
      <VideoUlContainer>
        {videosList.map(item => (
          <VideoItem item={item} key={item.id} />
        ))}
      </VideoUlContainer>
    )
  }

  retry = async () => {
    await this.setState({searchValue: ''})
    this.fetchSearchListItems()
  }

  getNoVideosView = darkMode => (
    <NoVideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="no videos"
      />
      <NoVideosHeading darkMode={darkMode}>
        No search results found
      </NoVideosHeading>
      <NoVideoPara darkMode={darkMode}>
        Try different key words or remove search filter
      </NoVideoPara>
      <RetryButton onClick={this.retry}>Retry</RetryButton>
    </NoVideosContainer>
  )

  getPremiumSection = () => {
    const onDeletePrimeSection = () => {
      this.setState({displayPrimiumSection: false})
    }
    return (
      <PremiumSection data-testid="banner">
        <RemoveContainer>
          <PremiumImgEl
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <RemoveButton onClick={onDeletePrimeSection} data-testid="close">
            x
          </RemoveButton>
        </RemoveContainer>
        <PremiumText>Buy Nxt Watch Premium</PremiumText>
        <PremiumText>prepaid plan with UPI</PremiumText>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </PremiumSection>
    )
  }

  getVideosList = darkMode => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <VideoSectionContainer darkMode={darkMode}>
          {this.getNoVideosView(darkMode)}
        </VideoSectionContainer>
      )
    }
    return (
      <VideoSectionContainer darkMode={darkMode}>
        {this.getVideoItems()}
      </VideoSectionContainer>
    )
  }

  getLoading = darkMode => (
    <LoadingContainer className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={darkMode ? '#ffffff' : '000000'}
        height="50"
        width="50"
      />
    </LoadingContainer>
  )

  getFailureView = darkMode => (
    <FailureContainer>
      <FailureImg
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <FailureHeading darkMode={darkMode}>
        Oops! Something went wrong
      </FailureHeading>
      <FailurePara darkMode={darkMode}>
        we are having sme trouble to process your request please try again
      </FailurePara>
      <FailureButton>Retry</FailureButton>
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
    const {searchValue, displayPrimiumSection} = this.state
    return (
      <>
        <Header />
        <WatchContext.Consumer>
          {value => {
            const {darkMode} = value
            return (
              <BodyContainer darkMode={darkMode} data-testid="home">
                <CategoryOptions />
                <HomeBodyMobileView>
                  {displayPrimiumSection ? this.getPremiumSection() : null}
                  <SearchBarContainer darkMode={darkMode}>
                    <SearchInputEl
                      type="search"
                      value={searchValue}
                      onChange={this.onChangeSearchValue}
                      placeholder="Search"
                    />
                    <SearchButtonEle
                      type="button"
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <FaSearch className="search-logo" />
                    </SearchButtonEle>
                  </SearchBarContainer>
                  {this.getVideos(darkMode)}
                </HomeBodyMobileView>
              </BodyContainer>
            )
          }}
        </WatchContext.Consumer>
      </>
    )
  }
}
export default Home
