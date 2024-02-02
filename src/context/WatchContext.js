import React from 'react'

const WatchContext = React.createContext({
  darkMode: false,
  savedVideosList: [],
  likedIds: [],
  dislikeIds: [],
  savedVideoIds: [],
  saveVideo: () => {},
  changeMode: () => {},
  likedId: () => {},
  dislikedId: () => {},
})
export default WatchContext
