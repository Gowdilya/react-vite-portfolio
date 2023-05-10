import styled, { css } from "styled-components";

const StyledAnchor = styled.a`
  margin: 1rem; /* 16px */
  color: ${(props) => props.color};
`;

export function NavLink({ to, textColor, children }) {
  return (
    <StyledAnchor href={to} color={textColor}>
      {children}
    </StyledAnchor>
  );
}
