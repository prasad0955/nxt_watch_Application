import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  VideoItemDetailsBodyContainer,
  VideoDetailContainer,
  TitlePara,
  ViewsContainerUl,
  ViewsListItem,
  PudlishListItem,
  LikeLOgosUl,
  ListItem,
  LikeButtonInConatiner,
  DislikeButtonInConatiner,
  SaveButtonInConatiner,
  LikePara,
  LikeButton,
  DescriptionContainer,
  ProfileContainer,
  ProfileImg,
  SubScribersContainer,
  DesktopViewsContainer,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
  SubscribersPara,
  NamePara,
} from './styledComponent'
import CategoryOptions from '../CategoryOptions'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'

import './index.css'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    currentStatus: status.loading,
  }

  componentDidMount() {
    this.fetchTheData()
  }

  fetchTheData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchData = await response.json()
    if (response.ok) {
      const details = fetchData.video_details
      const videoDetails = {
        channel: {
          name: details.channel.name,
          profileImageUrl: details.channel.profile_image_url,
          subscriberCount: details.channel.subscriber_count,
        },
        description: details.description,
        id: details.id,
        publishedAt: details.published_at,
        thumbnailUrl: details.thumbnail_url,
        title: details.title,
        videoUrl: details.video_url,
        viewCount: details.view_count,
      }
      this.setState({videoDetails, currentStatus: status.success})
    } else {
      this.setState({currentStatus: status.failure})
    }
  }

  retry = () => {
    this.fetchTheData()
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
      <FailurePara darkMode={darkMode}>We are having some trouble</FailurePara>
      <FailureButton onClick={this.retry}>Retry</FailureButton>
    </FailureContainer>
  )

  getVideos = darkMode => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case status.loading:
        return this.getLoading(darkMode)
      case status.failure:
        return this.getFailureView(darkMode)
      default:
        return null
    }
  }

  render() {
    const {videoDetails, currentStatus} = this.state
    const {
      channel,
      description,
      id,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    return (
      <WatchContext.Consumer>
        {value => {
          const {
            saveVideo,
            darkMode,
            savedVideoIds,
            likedIds,
            dislikedIds,
            likedId,
            dislikedId,
          } = value
          const updateSavedList = () => {
            saveVideo(videoDetails)
          }
          const onClickLike = () => {
            likedId(id)
          }
          const onClickDislike = () => {
            dislikedId(id)
          }
          const isLiked = likedIds.includes(id)
          const isDisliked = dislikedIds.includes(id)
          const isSaved = savedVideoIds.includes(id)
          return (
            <>
              <Header />
              <VideoItemDetailsBodyContainer>
                <CategoryOptions />
                {currentStatus === status.success && (
                  <VideoDetailContainer
                    darkMode={darkMode}
                    data-testid="videoItemDetails"
                  >
                    <ReactPlayer url={videoUrl} width="100%" />
                    <DescriptionContainer>
                      <TitlePara>{title}</TitlePara>
                      <DesktopViewsContainer>
                        <ViewsContainerUl>
                          <ViewsListItem>{`${viewCount} Views`}</ViewsListItem>
                          <PudlishListItem>{publishedAt}</PudlishListItem>
                        </ViewsContainerUl>
                        <LikeLOgosUl>
                          <ListItem darkMode={darkMode}>
                            <LikeButton
                              type="button"
                              aria-label="Mute volume"
                              onClick={onClickLike}
                            >
                              <LikeButtonInConatiner
                                isLiked={isLiked}
                                darkMode={darkMode}
                              >
                                <BiLike className="like-logos" />
                                <LikePara>Like</LikePara>
                              </LikeButtonInConatiner>
                            </LikeButton>
                          </ListItem>
                          <ListItem>
                            <LikeButton
                              type="button"
                              aria-label="Mute volume"
                              onClick={onClickDislike}
                            >
                              <DislikeButtonInConatiner
                                isDisliked={isDisliked}
                                darkMode={darkMode}
                              >
                                <BiDislike className="like-logos" />
                                <LikePara>Dislike</LikePara>
                              </DislikeButtonInConatiner>
                            </LikeButton>
                          </ListItem>
                          <ListItem>
                            <LikeButton
                              type="button"
                              aria-label="Mute volume"
                              onClick={updateSavedList}
                            >
                              <SaveButtonInConatiner
                                darkMode={darkMode}
                                isSaved={isSaved}
                              >
                                <MdPlaylistAdd className="like-logos" />
                                <LikePara>
                                  {isSaved ? 'Saved' : 'Save'}
                                </LikePara>
                              </SaveButtonInConatiner>
                            </LikeButton>
                          </ListItem>
                        </LikeLOgosUl>
                      </DesktopViewsContainer>
                      <hr />
                      <ProfileContainer>
                        <ProfileImg
                          alt="channel logo"
                          src={channel.profileImageUrl}
                        />
                        <SubScribersContainer>
                          <NamePara>{channel.name}</NamePara>
                          <SubscribersPara>{`${channel.subscriberCount} Subscribers`}</SubscribersPara>
                        </SubScribersContainer>
                      </ProfileContainer>
                      <p>{description}</p>
                    </DescriptionContainer>
                  </VideoDetailContainer>
                )}
                {currentStatus === status.loading && this.getLoading(darkMode)}
                {currentStatus === status.failure &&
                  this.getFailureView(darkMode)}
              </VideoItemDetailsBodyContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default VideoItemDetails
