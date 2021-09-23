import styled from "styled-components";
import Switch from "react-switch";

import { MenuAltLeft } from "@styled-icons/boxicons-regular/MenuAltLeft";

import { Close } from "@styled-icons/material-outlined/Close";
import { Sun } from "@styled-icons/heroicons-solid/Sun";
import { Moon } from "@styled-icons/heroicons-solid/Moon";

export const SwitchToggle = styled(Switch)`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Container = styled.div`
  background: transparent;
  height: 0px;
`;

export const IconLight = styled(Sun)`
  width: 30px;
  height: 30px;
  color: yellow;
  position: absolute;
  right: 0;
  margin-right: 70px;
  margin-top: 5px;
`;

export const IconDark = styled(Moon)`
  width: 30px;
  height: 30px;
  color: yellow;
  position: absolute;
  right: 0;
  margin-right: 70px;
  margin-top: 5px;
`;

export const NavColumn = styled.div`
  /* position: fixed; */
  padding: 20px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;

  p {
    position: absolute;
    right: 0;
    margin-top: 10px;
    margin-right: 70px;
    color: ${(props) => props.theme.colors.secondary};
    font-size: var(--lowtext);
  }
`;
export const IconNav = styled(MenuAltLeft)`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    width: 50px;
    height: 50px;
    margin-top: -5px;
    cursor: pointer;
    transition: all 1s;
  }
`;

export const IconClose = styled(Close)`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.text_secondary};
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px 10px;
  cursor: pointer;
`;

export const IconNavClose = styled.div`
  background: var(--third);
  padding: 20px;

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: var(--lowtitlemob);

    margin: 0 auto;
  }
`;

export const NavBarRow = styled.div`
  width: 200px;
  height: 100vh;
  background: ${(props) => props.theme.colors.secondary};
  position: relative;
  z-index: 99;
  box-shadow: 5px 10px 18px #888888;
`;

export const TextNav = styled.div`
  padding: 25px 20px;

  ul {
    list-style: none;
  }
  li {
    color: ${(props) => props.theme.colors.primary};
    font-size: var(--hightext);
    font-weight: 500;
    cursor: pointer;
    padding: 3px 0;

    &:hover {
      color: var(--third);
    }
  }
`;

export const NavBG = styled.div`
  width: 150vh;
  height: 100vh;
  background: rgba(255, 255, 255, 0.6);
  filter: blur(6px);
  margin-left: 200px;
  position: absolute;
  top: 0;
`;

/* ${(props) => props.theme.colors.primary}; */
