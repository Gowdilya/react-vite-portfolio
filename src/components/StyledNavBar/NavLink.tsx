import styled, { css } from "styled-components";

const StyledAnchor = styled.a`
  margin: 1rem; /* 16px */
  color: ${(props) => props.color};
  text-decoration-line: none;\
  font-size: 1rem;
  &:hover {
    font-size: 1.25rem;
  }
`;

export function NavLink({ to, textColor, children }) {
  return (
    <StyledAnchor href={to} color={textColor}>
      {children}
    </StyledAnchor>
  );
}
