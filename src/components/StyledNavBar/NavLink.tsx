import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
export function NavLink(props: NavProps) {
  return (
    // <StyledAnchor href={props.to} color={props.textColor}>
    //   {props.children}
    // </StyledAnchor>
    <StyledDiv color={props.textColor}>
      <Link to={props.to}>{props.children}</Link>
    </StyledDiv>
  );
}
