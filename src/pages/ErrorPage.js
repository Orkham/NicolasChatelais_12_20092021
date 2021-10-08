import React from 'react'
import styled from 'styled-components'

const StyledErrorPage = styled.div`
  text-align: center;
  font-weight: 700;
  color: red;
  font-size: 48px;
  margin-top: 100px;
`

export default function ErrorPage() {
  return (
    <StyledErrorPage className="error404Page">
      Error 404: Page not found
    </StyledErrorPage>
  )
}
