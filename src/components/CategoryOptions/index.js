import {FaHome, FaFire, FaAlignLeft} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {
  CategoriesSection,
  CategoryUlTopSecton,
  CategoryBottomSection,
  CatagoryLi,
  CategoryPara,
  SocialMediaContainer,
  ImgEl,
} from './styledComponent'
import WatchContext from '../../context/WatchContext'

import './index.css'

const CategoryOptions = () => (
  <WatchContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <CategoriesSection darkMode={darkMode}>
          <CategoryUlTopSecton>
            <Link to="/">
              <CatagoryLi darkMode={darkMode}>
                <FaHome className="category-logo" />
                <CategoryPara>Home</CategoryPara>
              </CatagoryLi>
            </Link>
            <Link to="/trending">
              <CatagoryLi darkMode={darkMode}>
                <FaFire className="category-logo" />
                <CategoryPara>Trending</CategoryPara>
              </CatagoryLi>
            </Link>
            <Link to="/gaming">
              <CatagoryLi darkMode={darkMode}>
                <SiYoutubegaming className="category-logo" />
                <CategoryPara>Gaming</CategoryPara>
              </CatagoryLi>
            </Link>
            <Link to="/saved-videos">
              <CatagoryLi darkMode={darkMode}>
                <FaAlignLeft className="category-logo" />
                <CategoryPara>Saved Videos</CategoryPara>
              </CatagoryLi>
            </Link>
          </CategoryUlTopSecton>
          <CategoryBottomSection>
            <p>CONTACT US</p>
            <SocialMediaContainer>
              <ImgEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ImgEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ImgEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </CategoryBottomSection>
        </CategoriesSection>
      )
    }}
  </WatchContext.Consumer>
)
export default CategoryOptions
