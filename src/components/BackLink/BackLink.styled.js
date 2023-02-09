import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackWrapper = styled.div`
  position: sticky;
  top: 60px;
  margin-bottom: 10px;
  padding: 5px 0;
  background-color: #d8d4fae0;
`;

export const StyledLink = styled(Link)`
  padding: 8px 20px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: #eb9e9edc;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  transition: color 250ms ease;

  :hover {
    color: #07d200;
  }
`;
