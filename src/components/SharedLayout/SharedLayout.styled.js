import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* gap: 12px; */
  padding: 8px 0;
  margin-bottom: 16px;
  background-color: #e69494eb;
  border-bottom: 1px solid #521919;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 0;
  border-radius: 4px;
  outline: transparent;
  text-decoration: none;
  color: black;
  font-weight: 500;

  transition: scale 250ms ease, color 250ms ease;

  & + & {
    margin-left: 25px;
  }

  &.active {
    color: #d55561;
    /* background-color: orangered; */
  }

  :hover,
  :focus {
    scale: 1.2;
    color: #07d200;
  }
`;
