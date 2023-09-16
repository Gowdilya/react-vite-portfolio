import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledAnchor = styled.a`
  margin: 1rem; /* 16px */
  color: ${(props) => props.color};
  text-decoration-line: none;\
  font-size: 1rem;
  &:hover {
    font-size: 1.25rem;
  }
`;

const StyledDiv = styled.div`
  margin: 1rem; /* 16px */
  color: ${(props) => props.color};
  text-decoration-line: none;\
  font-size: 1rem;
  &:hover {
    font-size: 1.25rem;
  }
`;

interface NavProps {
  to: string;
  textColor?: string;
  children: React.ReactNode;
}
export function NavBarLink(props: NavProps) {
  return (
    // <StyledAnchor href={props.to} color={props.textColor}>
    //   {props.children}
    // </StyledAnchor>
    <StyledDiv color={props.textColor}>
      <NavLink
        to={props.to}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : "rgb(225, 245, 254)",
            textDecoration: isActive ? "underline" : "",
          };
        }}
      >
        {props.children}
      </NavLink>
    </StyledDiv>
  );
}
