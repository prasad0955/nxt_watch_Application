import styled from 'styled-components'

export const CategoriesSection = styled.div`
  display: none;
  width: 270px;
  margin: 0px;
  height: 100%;
  padding: 25px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkMode ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`
export const CategoryUlTopSecton = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`
export const CatagoryLi = styled.li`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#313131')};
`
export const ImgEl = styled.img`
  height: 40px;
  width: 40px;
  padding: 0px;
  margin-right: 10px;
`
export const CategoryPara = styled.p`
  padding: 0px;
  margin: 0px;
`
export const CategoryBottomSection = styled.div`
  padding: 0px;
  margin: 0px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`
