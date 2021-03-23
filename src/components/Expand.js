import { useState } from "react"
import styled, {keyframes} from "styled-components"

export const Expand = ({ title, children, index }) => {
    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <ExpandWrapper>
            <ExpandButton onClick={toggle}>
                <span>{title}</span>
                <ExpandChevron index={index} open={isOpen} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 13.8788L5.41414 7.29285L3.62891 9.07808L12.0001 17.4492L20.3712 9.07808L18.586 7.29285L12.0001 13.8788Z" />
                </ExpandChevron>
            </ExpandButton>
            <ExpandContent open={isOpen}>
                {children}
            </ExpandContent>
        </ExpandWrapper>
    )
}

const ExpandWrapper = styled.div`
`

const ExpandChevron = styled.svg`
  transform: ${p => p.open ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform .2s ease-out;
  fill: ${p => p.theme.color.array[p.index]};
`

const ExpandButton = styled.button`
  margin: 0;
  cursor: pointer;
  color: ${p => p.theme.color.text};
  background-color: transparent;
  border-width: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 14px;
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.small} ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
  border-bottom: 1px solid ${p => p.theme.color.line};
  &:focus, &:hover {
    outline: 0;
    background-color: ${p => p.theme.color.bg};
  }
`

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

const ExpandContent = styled.div`
  display: ${p => !p.open && 'none'};
  padding: ${p => p.theme.spacing.medium};
  border-bottom: 1px solid ${p => p.theme.color.line};
  animation: ${fadeIn} .4s ease-in-out forwards;
  opacity: 0;
`
