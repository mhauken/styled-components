import styled from "styled-components"

export const Box = styled.div`
  background-color: ${p => p.theme.color.box};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: ${p => p.theme.shadow};
`