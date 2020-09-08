import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  text-decoration: none;
  background: none;
`

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>
}

export default Button
