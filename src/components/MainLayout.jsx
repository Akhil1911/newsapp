import React from 'react'
import { Container } from 'react-bootstrap'
const MainLayout = (props) => {
  return (
      <Container>
          {props.children}
     </Container>
  )
}

export default MainLayout