import { MobileNav } from "./MobileNav";
import { NavBarLink } from "./NavBarLink";
import { useState } from "react";
import styled, { css } from "styled-components";
import { IoSettingsSharp } from "react-icons/io5";
import React from "react";
import { Tooltip } from "react-tooltip";

export type NavBarProps = {
  style: StyleProps;
};

export type StyleProps = {
  bgColor: string;
  textColor: string;
};

const baseSpan = css<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 0.25rem; /* 4px */
  width: 100%;
  border-radius: 0.5rem; /* 8px */
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
const top = css<{ open: boolean }>`
  transform: ${(props) => props.open && "translateY(0.875rem) rotate(45deg)"};
`;

const middle = css<{ open: boolean }>`
  width: ${(props) => (props.open ? "0%" : "100%")};
`;

const bottom = css<{ open: boolean }>`
  transform: ${(props) => props.open && "translateY(-0.875rem) rotate(-45deg)"};
`;

const TopSpan = styled.span<{ open: boolean; color: string }>`
  ${baseSpan}
  ${top}
`;

const MidSpan = styled.span<{ open: boolean; color: string }>`
  ${baseSpan}
  ${middle}
`;

const BottomSpan = styled.span<{ open: boolean; color: string }>`
  ${baseSpan}
  ${bottom}
`;
const HamBurgerButton = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 2rem; /* 32px */
  height: 2rem; /* 32px */
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    visiblity: hidden;
    display: none;
  }
`;

const TopNav = styled.div`
  visibility: hidden;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    visibility: visible;
    justify-content: flex-end;
    align: end;
    width: 75%;
  }
`;

const MenuBar = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledNav = styled.nav`
  z-index: 30;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  align-items: center;
  padding: 1rem; /* 16px */
  height: 5rem; /* 80px */
  display: flex;
  background-color: ${(props) => props.color};
`;

export default function Navbar({ style }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav color={style.bgColor}>
      <MobileNav
        open={open}
        setOpen={setOpen}
        bgColor={style.bgColor}
        textColor={style.textColor}
      />
      <LogoContainer>
        <img
          //src="/images/gowdilya.png" //local
          src="images/gowdilya.png" //githubpages
          height={154}
          width={200}
          alt={"Gowdilya"}
        />
      </LogoContainer>
      <MenuBar>
        <HamBurgerButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <TopSpan open={open} color={style.textColor} />
          <MidSpan open={open} color={style.textColor} />
          <BottomSpan open={open} color={style.textColor} />
        </HamBurgerButton>
        <TopNav>
          <NavBarLink to="/about" textColor={style.textColor}>
            About
          </NavBarLink>
          <NavBarLink to="/resume" textColor={style.textColor}>
            Resume
          </NavBarLink>
          <NavBarLink to="/projects" textColor={style.textColor}>
            Side Projects
          </NavBarLink>
        </TopNav>
      </MenuBar>
    </StyledNav>
  );
}
