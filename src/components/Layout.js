import styled from "styled-components"

export const Layout = ({spacing = "medium", children}) => (
    <StyledLayout spacing={spacing}>{children}</StyledLayout>
)

const StyledLayout = styled.div`
  display: grid;
  grid-row-gap: ${p => p.theme.spacing[p.spacing]};
`