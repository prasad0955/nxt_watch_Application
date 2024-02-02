import styled from 'styled-components'

export const GamingListItemContainer = styled.li`
  padding: 0px;
  width: 50%;
  padding: 8px;
  @media screen and (min-width: 576px) {
    width: 33%;
    padding-left: 1%;
  }
`
export const GamingImgEl = styled.img`
  width: 100%;
`
export const TTitleHeading = styled.p`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
export const ViewCountPara = styled.p`
  padding: 0px;
  margin: 0px;
  margin-top: 4px;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
