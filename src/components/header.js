import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 0;

  img {
    margin-bottom: 0;
  }
`;

const HeaderContainter = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainter>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{ width: '100px', margin: '0' }} src={Logo} alt="GatsbyLogo"/>
        </Link>
      </h1>
    </HeaderContainter>
  </HeaderWrapper>
)

export default Header
