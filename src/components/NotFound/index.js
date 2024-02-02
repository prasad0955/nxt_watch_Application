import {
  BodyContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponent'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import CategoryOptions from '../CategoryOptions'

const NotFound = () => (
  <>
    <Header />
    <WatchContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <BodyContainer darkMode={darkMode}>
            <CategoryOptions />
            <FailureContainer>
              <FailureImg
                alt="ot found"
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
              />
              <FailureHeading darkMode={darkMode}>
                Page Not Found
              </FailureHeading>
              <FailurePara darkMode={darkMode}>
                we are sorry, the page you requested could not be found.
              </FailurePara>
              <FailureButton>Retry</FailureButton>
            </FailureContainer>
          </BodyContainer>
        )
      }}
    </WatchContext.Consumer>
  </>
)
export default NotFound
