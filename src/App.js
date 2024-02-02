import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import VideoItemDetails from './components/VideoItemDetails'
import WatchContext from './context/WatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkMode: true,
    savedVideosList: [],
    likedIds: [],
    dislikedIds: [],
    savedVideoIds: [],
  }

  changeMode = () => {
    this.setState(prevstate => ({darkMode: !prevstate.darkMode}))
  }

  likedId = id => {
    console.log(id)
    const {likedIds, dislikedIds} = this.state
    const filterDislikes = dislikedIds.filter(ids => ids !== id)
    if (likedIds.includes(id)) {
      const updatedIds = likedIds.filter(ids => ids !== id)
      this.setState({likedIds: updatedIds})
    } else {
      this.setState({likedIds: [...likedIds, id], dislikedIds: filterDislikes})
    }
  }

  dislikedId = id => {
    console.log(id)
    const {likedIds, dislikedIds} = this.state
    const filterLikes = likedIds.filter(ids => ids !== id)
    if (dislikedIds.includes(id)) {
      const updatedIds = dislikedIds.filter(ids => ids !== id)
      this.setState({dislikedIds: updatedIds})
    } else {
      this.setState({dislikedIds: [...dislikedIds, id], likedIds: filterLikes})
    }
  }

  saveVideo = VideoDetails => {
    const {savedVideosList, savedVideoIds} = this.state
    const filteredListIds = savedVideoIds.filter(id => id !== VideoDetails.id)
    const filteredList = savedVideosList.filter(
      item => item.id !== VideoDetails.id,
    )
    if (filteredList.length === savedVideosList.length) {
      this.setState(prevstate => ({
        savedVideosList: [...prevstate.savedVideosList, VideoDetails],
        savedVideoIds: [...prevstate.savedVideoIds, VideoDetails.id],
      }))
    } else {
      this.setState({
        savedVideosList: filteredList,
        savedVideoIds: filteredListIds,
      })
    }
  }

  render() {
    const {
      darkMode,
      savedVideosList,
      likedIds,
      dislikedIds,
      savedVideoIds,
    } = this.state
    console.log(savedVideosList)
    console.log(likedIds)
    console.log(dislikedIds)
    console.log(savedVideoIds)
    return (
      <WatchContext.Provider
        value={{
          darkMode,
          savedVideosList,
          likedIds,
          dislikedIds,
          savedVideoIds,
          changeMode: this.changeMode,
          saveVideo: this.saveVideo,
          likedId: this.likedId,
          dislikedId: this.dislikedId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
