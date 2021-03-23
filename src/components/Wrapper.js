import styled from "styled-components/macro"

export const Wrapper = styled.main`
  padding-top: ${p => p.theme.spacing.large};
  margin-left: auto;
  margin-right: auto;
  width: 90vw;
  width: clamp(320px, 90vw, 500px);
`